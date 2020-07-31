import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 85%;
  background: #D2D7DF;
  display: flex;
  justify-content: center;

`
export const Header = styled.div`
  width: 100%;
  height: 15%;
  background: #23395B;

  h2 {
    padding: 20px;
    width: 100%;
    font-size: 18px;
    color: white;
    text-align: center;
  }
`
export const Content = styled.div`
  min-width: 60%;
  height: 100%;
  box-shadow: 0 0 12px 6px rgba(0,0,0,0.4);
  margin-top: -40px;
  background: white;
  border-radius: 14px;
  animation: popup .6s;
  transition: .3s;


  /* Small Width Devices */
  @media(max-width: 550px) {
    width: 90%;
  }

  @keyframes popup {
    from {
      opacity: 0;
      transform: scale(0.8);
    } 
    40% {
      opacity: 1;
      transform: scale(1.1);
    } 100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`