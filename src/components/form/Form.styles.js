import styled from "styled-components";

export const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const Title = styled.h3`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 50%;
    margin-bottom: 35px;
    transform: translate(-50%, 0);
`

export const FormStyled = styled.form`
    flex-direction: column;
    margin-top: 10px;
    width: 40vw;
    height: 70vh;
`

export const InputFieldsStyled = styled.div`
    display: grid;
    gap: 10px;
    flex-direction: column;
    margin-left: 50%;
    transform: translate(-50%, 0);
    padding: 12px;
    input:focus{
        outline: none;
    }
`
export const Button = styled.button`
    width: auto;
    height: 25px;
    border-radius: 10px;
    border: 0;
    cursor: pointer;
    background-color: #57A1F4;
`