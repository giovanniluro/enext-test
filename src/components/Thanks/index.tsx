import React from 'react';
import { Container } from './style';

interface ThanksProps {
  name: string;
  avatar: any;
}

const Thanks: React.FC<ThanksProps> = ({ name, avatar }) => {

  return (
    <Container>
      <img src={avatar} alt='avatar' />
        <p>Prontinho <span>{name.split(' ')[0]}</span>, o seu cadastro foi finalizado! </p>
        <p>Nós agradecemos, e seja bem vindo(a)!</p>
    </Container>
  )

}

export default Thanks;