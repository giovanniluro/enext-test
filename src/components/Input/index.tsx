import React, { useCallback } from 'react';
import { InputContainer } from './style';

interface InputProps {
  icon: any;
  title: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({ type, icon, title, value, setValue, placeholder }) => {

  //Phone Regex
  const pattern = /[0-9]|''/g;

  //Handling input to prevent not numbers on phonenumber and format number
  const handleInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    if (type !== 'tel') {
      setValue(e.target.value);
    } else {
      const digit = e.target.value.match(pattern);
      if(digit) {
        let phone = digit.reduce((prev, curr) => prev+curr);
        if(phone.length === 1) {
          phone = '(' + phone + ' ) - ';
        }
        else if(phone.length > 1) {
          phone = '(' + phone.substring(0,2) + ') - ' + phone.substring(2, phone.length);
        }
        
        if(phone.length < 17) setValue(phone);
      }
      else {
        setValue('');
      }
    }
  }, [pattern, setValue, type]);

  return (
    <InputContainer>
      <div>
        {icon}
        <span>{title}</span>
      </div>
      <input type={type} value={value} placeholder={placeholder} onChange={handleInput} required />
    </InputContainer>
  );
}

export default Input;