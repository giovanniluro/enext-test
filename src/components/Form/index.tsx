import React, { useState, useCallback, ChangeEvent } from 'react';
import defaultUser from '../../assets/user.jpg';
import Cropper from '../Cropper';
import Input from '../Input';
import Thanks from '../Thanks';
import { Container, ImageInput, FormContent } from './style';
import { FiCamera, FiHome, FiUser, FiMail, FiPhone } from 'react-icons/fi';

const Form: React.FC = () => {

  const [formIsDone, setFormIsDone] = useState(false);
  const [cropper, setCropper] = useState(false);
  const [image, setImage] = useState<string>('');
  const [userAvatar, setUserAvatar] = useState<string>(defaultUser);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [departament, setDepartament] = useState<string>('');
  const [phone, setPhone] = useState<string>('');

  //Handling image upload
  const handleAvatarChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setCropper(true);
      e.target.value = '';
    }
  }, []);

  //FormUpload
  const handleFormSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormIsDone(true);

    //Dados para serem enviados ao backend
    const data = new FormData();
    data.append('avatar', userAvatar);
    data.append('name', name);
    data.append('email', email);
    data.append('departament', departament);
    data.append('phone', phone);

    //await api.push('/user', data);

  }, [departament, email, name, phone, userAvatar]);

  return (
    <>
      <Container>
        {!formIsDone &&
          <FormContent onSubmit={handleFormSubmit}>

            <ImageInput>
              <img src={userAvatar} alt='avatar' />
              <label>
                <FiCamera size={22} />
                <input type='file' accept='image/*' onChange={handleAvatarChange} />
              </label>
            </ImageInput>

            <Input icon={<FiUser />} title='Nome:' value={name} setValue={setName} type='text' placeholder='Luiz Henrique' />
            <Input icon={<FiMail />} title='E-mail:' value={email} setValue={setEmail} type='email' placeholder='luiz.henrique@outlook.com'/>
            <Input icon={<FiHome />} title='Departamento:' value={departament} setValue={setDepartament} type='text' placeholder='Departamento de T.I' />
            <Input icon={<FiPhone />} title='Telefone:' value={phone} setValue={setPhone} type='tel' placeholder='19 934684573'/>
              
            <button type='submit'>Enviar</button>
          </FormContent>
        }
        {formIsDone && 
          <Thanks name={name} avatar={userAvatar} />
        }
      </Container>
      {cropper && <Cropper src={image} setCropper={setCropper} setSrc={setUserAvatar} setImg={setImage} />}
    </>
  )

}

export default Form;