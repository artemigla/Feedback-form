import React from "react";
import { HeaderStyled, Title } from './Header.styles';

export const Header = ({ headerTitle }) => {
    return (
        <HeaderStyled>
            <Title>{headerTitle}</Title>
        </HeaderStyled>
    )
}