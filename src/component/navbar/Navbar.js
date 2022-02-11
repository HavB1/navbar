import React from "react";
import { LogoImg, LogoText, Logo } from "../styles/Logo.styled";
import {
  LeftSection,
  MiddleSection,
  NavbarContainer,
  NavBtn,
  NavBtnLink,
  NavLink,
  RightSection,
  Chevron,
} from "../styles/Navbar.styled";

const Navbar = () => {
  return (
    <>
      <NavbarContainer>
        <LeftSection>
          {/* <LogoImg src="../../assets/images/Icon.png" alt="Logo" /> */}
          <LogoText>4-SAISONS</LogoText>
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
            <Chevron />
          </NavBtn>
        </RightSection>
      </NavbarContainer>
    </>
  );
};

export default Navbar;
