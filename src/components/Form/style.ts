import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
`

export const FormContent = styled.form`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;

  button {
    width: 80%;
    background: #45565E;
    margin: 20px 0;
    color: white;
    border-radius: 12px;
  }
`

export const Input = styled.label`
  width: 100%;

  > div {
    display: flex;
    align-items: center;

    svg { 
      margin-right: 10px;
      color: #45565E;
    }
    
    span {
      font-weight: bold;
    }
  }

  input {
    width: 100%;
    border: 0;
    border-bottom: 2px solid black;
    padding: 8px 4px;


    &:focus {
      outline: 0;
    }
  }

`

export const ImageInput = styled.div`
  height: 30%;
  display: flex;
  justify-content: center;
  position: relative;

  img {
    height: 100%;
    border-radius: 18px;
  }

  label {
    position: absolute;
    bottom: -20px;
    border: 2px solid black;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2;
    transition: .3s;
    height: 50px;
    width: 50px;
    border-radius: 50%;
    background: #5D737E;
    color: white;

    input {
     display: none;
    }

    &:hover {
      background: #3C4C53;
    }
  }

`