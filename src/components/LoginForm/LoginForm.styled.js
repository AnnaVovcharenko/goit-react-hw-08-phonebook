import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  // align-items: center;
  width: 400px;
  padding: 12px;
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
  // color: rgb(104, 11, 109);
  font-size: 20px;
`;

export const Input = styled.input`
  color: rgb(104, 11, 109);
  border: none;
  border-radius: 10px;
  padding: 8px 12px;
  font: inherit;
  cursor: pointer;
  
`;

export const Button = styled.button`
font-size: 25px;
padding: 8px 12px;
background-color: pink;
color: white;
border: none;
border-radius: 10px;
cursor: pointer;
margin-bottom: 16px;
transition: background-color 0.4s ease, color 0.4s ease;



  &:hover {
    background-color: #fb00ff;
  }
`;
