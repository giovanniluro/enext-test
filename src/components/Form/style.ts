import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  height: 100%;
`

export const FormContent = styled.form`
  display: flex;
  height: 100%;
`

export const Input = styled.label`
  width: 100%;
  margin-top: 40px;

  h4 {
    font-weight: 500;
  }

  input {
    width: 80%;
    margin-top: 10px;
    padding: 8px 4px;
  }
`

export const AvatarInput = styled.label`

`

export const Data = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export const Image = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`