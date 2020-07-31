import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 50 120px;
  background: rgba(0,0,0,0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  z-index: 3;

  /* Small Height Devices */
  @media(max-height: 600px) {
    height: 800px;
  }
`

export const Content = styled.div`
  max-height: 70%;
  min-width: 50%;
  background: white;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 14px;
  position: relative;
  animation: slideup .5s ease-out;

  img {
    height: 450px;
    width: 450px;
  }

  button {
    background: #23395B;
    color: white;
    border-radius: 50%;
    padding: 4px;
  }

  .crop-btn {
    margin: 35px 0;
    padding: 20px 30px;
    border-radius: 12px;
  }

  @keyframes slideup {
    from {
      opacity: 0;
      transform: translateY(-50vh);
    } 
    30% {
      opacity: 1;
    }
    to {
      transform: translateY(0);
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  margin: 0;
  border-radius: 14px;
  padding: 10px;
  top: 20px;
  right: 20px;
`

