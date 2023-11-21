import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const MyForm = styled(Form)`
display: flex;
flex-direction: column;
gap: 25px;
align-items: center;
width: 400px;
padding: 12px;
background-color: rgba(214, 195, 211, 0.337);
border: 1px solid pink;
border-radius: 10px;
margin: 0 auto;


`;
export const MyField = styled(Field)`
padding: 10px;
border: 1px solid pink;
border-radius: 10px;
transition: border-color 0.4s ease;
width: 380px;

&:focus {
border-color: #fb00ff;
  }
`;


export const Label = styled.label`
display: flex;
flex-direction: column;
  margin-bottom: 15px;
  color: #f08080;
  // color: rgb(104, 11, 109);
  font-size: 20px;
`;
export const InputContainer = styled.div`
  position: center;
  color: #f08080;
  
`;
export const ButtonForm = styled.button`
  font-size: 25px;
  padding: 10px ;
  background-color: pink;
  color: white;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.4s ease, color 0.4s ease;
  width: 400px;
  margin-bottom: 16px;

  &:active {
    background-color: #fb00ff;
  }
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  margin-top: 10px;

  pointer-events: none;
`;