import styled from "@emotion/styled";
import { Form as FormikForm,  Field, ErrorMessage as FormikError } from 'formik';

export const Form = styled(FormikForm)`
    max-width: 400px;
    border-radius: 15px;
    background-color: aliceblue;
    margin: 15px auto;
    padding: 10px;
`;
export const FormField = styled.label`
font-family: "Libre Baskerville", serif;
    text-shadow: gray 0px 1px 1px;
    font-size: 24px;
    font-style: italic;
    font-weight: normal;`;


export const LabelWrapper = styled.div`
padding: 10px;`;


export const FieldFormik = styled(Field)`  
width: 300px;
padding: 5px 10px;
outline: none;
background-color: transparent;
border-radius: 15px;
color: gray;`;


export const ErrorMessage = styled(FormikError)``;


export const SubmitButton = styled.button` 
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding: 8px 15px;
    max-width: 100%;
    outline: none;
    border-radius: 15px;
    cursor: pointer;
    margin: 15px auto;
    color: rgb(187, 195, 200);
    font-style: italic; 
    font-size: 18px;
    border-color: transparent;
    font-weight: normal;
    text-shadow: gray 0px 1px 1px;
    font-family: "Libre Baskerville", serif;`;
