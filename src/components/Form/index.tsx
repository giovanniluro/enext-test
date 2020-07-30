import React from 'react';
import { Container, FormContent, Input, AvatarInput, Data, Image } from './style';
import defaultUser from '../../assets/user.png'

const Form: React.FC = () => {

  return (
    <Container>
      <FormContent>
        <Data>
          <h2>Bem-vindo(a)! Para realizar o seu cadastro, preencha os campos abaixo:</h2>

          <Input>
            <h4>Digite o seu nome:</h4>
            <input type='text' />
          </Input>

          <Input>
            <h4>Digite o seu e-mail:</h4>
            <input type='text' />
          </Input>


          <Input>
            <h4>Digite o seu departamento:</h4>
            <input type='text' />
          </Input>


          <Input>
            <h4>Digite o seu telefone:</h4>
            <input type='phone' />
          </Input>
        </Data>
        <Image>
          <img src={defaultUser} alt='profile photo' />
          <AvatarInput>
            <input type='file' />
          </AvatarInput>
        </Image>
      </FormContent>
    </Container>
  )

}

export default Form;