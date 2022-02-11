import React from "react";
import { FormStyled, WrapperForm, Title, InputFieldsStyled, Button } from "./Form.styles";

export const Form = ({ formTitle }) => {
    return (
        <WrapperForm>
            <FormStyled>
                <Title>{formTitle}</Title>
                <InputFieldsStyled>
                    <input
                        type="text"
                        placeholder="First name"
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                    />
                    <input
                        type="password"
                        placeholder="Password"
                    />
                    <input
                        type="password"
                        placeholder="Confirm password"
                    />
                    <Button>Registration</Button>
                </InputFieldsStyled>
            </FormStyled>
        </WrapperForm>
    )
}