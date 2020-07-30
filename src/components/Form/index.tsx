import React, { useState, useCallback, ChangeEvent } from 'react';
import defaultUser from '../../assets/user.jpg';
import Cropper from '../Cropper';
import { Container, ImageInput, FormContent, Input } from './style';
import { FiCamera, FiHome, FiUser, FiMail, FiPhone } from 'react-icons/fi';

const Form: React.FC = () => {

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
    }
  }, []);

  const handleFormSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

  }, []);

  return (
    <>
      <Container>
        <FormContent onSubmit={handleFormSubmit}>

          <ImageInput>
            <img src={userAvatar} alt='avatar' />
            <label>
              <FiCamera size={22} />
              <input type='file' accept='image/*' onChange={handleAvatarChange} />
            </label>
          </ImageInput>

          <Input>
            <div>
              <FiUser size={24} />
              <span>Nome:</span>
            </div>
            <input type='text' value={name} onChange={e => setName(e.target.value)}/>
          </Input>

          <Input>
            <div>
              <FiMail size={24} />
              <span>E-mail:</span>
            </div>
            <input type='email' value={email} onChange={e => setEmail(e.target.value)}/>
          </Input>

          <Input>
            <div>
              <FiHome size={24} />
              <span>Depertamento:</span>
            </div>
            <input type='text' value={departament} onChange={e => setDepartament(e.target.value)}/>
          </Input>

          <Input>
            <div>
              <FiPhone size={24} />
              <span>Telefone:</span>
            </div>
            <input type='tel' value={phone} onChange={e => setPhone(e.target.value)}/>
          </Input>

          <button type='submit'>Enviar</button>
        </FormContent>
      </Container>
      {cropper && <Cropper src={image} setCropper={setCropper} setSrc={setUserAvatar} setImg={setImage} />}
    </>
  )

}

export default Form;