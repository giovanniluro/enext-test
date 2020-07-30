import styled from 'styled-components';

export const InputContainer = styled.label`
  width: 100%;

  > div {
    display: flex;
    align-items: center;

    svg { 
      margin-right: 10px;
      color: #23395B;
      height: 24px;
      width: 24px;
    }
    
    span {
      font-weight: bold;
      font-size: 16px;
    }
  }

  input {
    width: 100%;
    border: 0;
    border-bottom: 2px solid #23395B;
    padding: 8px 4px;
    font-size: 14px;


    &:focus {
      outline: 0;
    }
  }

`