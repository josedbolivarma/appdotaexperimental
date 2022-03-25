import React from 'react';
import { HeaderStyled, NavStyled, StyledLink } from '../styled/styledcomponents';

const Navbar = () => {
    return (
        <div>
            <HeaderStyled>
                <NavStyled>
                <StyledLink to="/">Home</StyledLink>
                <StyledLink to="/register">Crea tu heroe</StyledLink>
                </NavStyled>
            </HeaderStyled>
        </div>
    )
}

export default Navbar;