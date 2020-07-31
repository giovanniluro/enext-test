import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: swipefromrigth .7s;

  img {
    margin-top: 50px;
    height: 50%;
    border-radius: 50%;
    margin-bottom: 50px;
    box-shadow: 0 0 3px 6px rgba(0,0,0,0.5);
  }

  p {
    font-size: 24px;
    font-weight: 500;
    line-height: 22px;
    text-align: center;

    span {
      font-weight: 700;
    }

    &+p{
      margin-top: 15px;
      font-size: 20px;
    }
  }

  @keyframes swipefromrigth {
    from {
      opacity: 0;
      transform: translateX(50vw);
    } to {
      opacity: 1;
      transform: translateX(0);
    }
  }

`