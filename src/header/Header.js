import React from "react";
import { HeaderStyled, Title } from './Header.style';

export const Header = ({ headerTitle }) => {
    return (
        <HeaderStyled>
            <Title>{headerTitle}</Title>
        </HeaderStyled>
    )
}