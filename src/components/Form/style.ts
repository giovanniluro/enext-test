import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 20px;
  overflow: hidden;
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
    background: #23395B;
    margin: 20px 0;
    color: white;
    border-radius: 12px;
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
    height: 45px;
    width: 45px;
    border-radius: 50%;
    background: #23395B;
    color: white;

    input {
     display: none;
    }

    /* Small Devices */
    @media(max-width: 550px) {
      height: 40px;
      width: 40px;
    }

    &:hover {
      background: #17263A;;
    }
  }
`