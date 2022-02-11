import React from "react";
import { LogoText } from "../styles/Logo.styled";
import {
  LeftSection,
  MiddleSection,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavLink,
  RightSection,
} from "../styles/Navbar.styled";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <LeftSection>
          <LogoText>4_SAISONS</LogoText>
        </LeftSection>
        <MiddleSection>
          <NavLink to="/">Acceuil</NavLink>
          <NavLink to="/">Services</NavLink>
          <NavLink to="/">Solidarite</NavLink>
          <NavLink to="/">DITO UI DESIGN</NavLink>
        </MiddleSection>
        <RightSection>
          <NavBtn>
            <NavBtnLink to="/">Se Connecter</NavBtnLink>
            <NavBtnLink to="/">Solidarite</NavBtnLink>
          </NavBtn>
        </RightSection>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
