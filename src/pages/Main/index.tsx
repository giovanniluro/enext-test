import React from 'react';
import { Container, Content, Header } from './style'
import Form from '../../components/Form';

const Main: React.FC = () => {

  return (
    <>
      <Header>
        <h2>Novo Cadastro</h2>
      </Header>
      <Container>
        <Content>
          <Form />
        </Content>
      </Container>
    </>
  );
}

export default Main;
