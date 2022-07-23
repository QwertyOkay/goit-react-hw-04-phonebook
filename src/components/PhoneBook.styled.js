import styled from 'styled-components'
import { Field, Form } from 'formik';


export const HeadTitle = styled.p`
      font-size: 30px;
    font-weight: 300;
    margin-top: 0px;
    letter-spacing: 2px;
    font-weight: 300;
    color: #05083d;
  
`;

export const FormStyled = styled(Form)`
background-color: #aaa;
border: 1px solid lightgray;
  width: 300px;
  padding: 66px;
  
`;

export const LabelStyled = styled.label`
display: block;
margin-bottom: 15px;
font-weight: 500;
width: 50px;
`;


export const FieldStyled = styled(Field)`
border:1px solid lightgray;
width: 250px;
`;


export const ButtonStyled = styled.button`
padding: 5px 20px;
    border-radius: 5px;
    background-color: #05083d;
    color: #0dff00e2;
    font-size: 16px;
    line-height: 1.3;
    letter-spacing: 1px;
    border: none;
    cursor: pointer;
    box-shadow: -10px 0px 13px -7px #000000, 10px 0px 13px -7px #000000,
      5px 5px 15px 5px rgba(0, 0, 0, 0);
    text-shadow: 0 0 10px #ffffff;
`;


export const ContactItem = styled.span`
display: inline-flex;
margin-top: 10px;
margin-right: 10px;
font-weight: 500;
`


export const Error = styled.div`
font-size: 14px;
width: 250px;
color: red;
`