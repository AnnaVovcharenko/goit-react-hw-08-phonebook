import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  padding: 12px;
//   background-color: rgba(0, 0, 0, 0.6);
background-color: rgba(214, 195, 211, 0.337);
  border: 1px solid pink;
  border-radius: 10px;
  margin: 0 auto;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
  color: #f08080;
//   color: rgb(104, 11, 109);
  font-size: 20px;
`;

export const Input = styled.input`
//   color: #171718;
color: rgb(104, 11, 109);
border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
`;

export const Button = styled.button`
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  background-color: pink;
  border: none;
  border-radius: 10px;
  transition: background-color 0.4s ease, color 0.4s ease;
  color: white;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: #fb00ff;
  }
`;