import React from 'react';
import { InputContainer } from './style';

interface InputProps {
  icon: any;
  title: string;
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
  type: string;
}

const Input: React.FC<InputProps> = ({type, icon, title, value, setValue, placeholder}) => {

  return (
    <InputContainer>
      <div>
        {icon}
        <span>{title}</span>
      </div>
      <input type={type} value={value} placeholder={placeholder} onChange={e => setValue(e.target.value)} required/>
    </InputContainer>
  );
}

export default Input;