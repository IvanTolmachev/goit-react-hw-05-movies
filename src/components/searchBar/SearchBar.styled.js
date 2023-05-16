import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  max-width: 600px;
  background-color: #fff;
  border-radius: 10px;
  overflow: hidden;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  background: #20b2aa;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  &:hover {
    opacity: 0.6;
  }
`;

export const Label = styled.label`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  clip-path: inset(50%);
  border: 0;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: none;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;

  &::placeholder {
    font: inherit;
    font-size: 18px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
`;

export const GoBackButton = styled.button`
  width: 300px;
  height: 40px;
  color: #20b2aa;
  background-color: #1e2a06;
  border-radius: 10px;
  margin: 5px;
  font-size: 20px;
`;
