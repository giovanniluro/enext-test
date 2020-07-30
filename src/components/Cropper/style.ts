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

  img {
    height: 450px;
    width: 450px;
  }
`

export const CloseButton = styled.button`
  position: absolute;
  padding: 10px;
  top: 20px;
  right: 20px;
`

