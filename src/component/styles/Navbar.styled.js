import styled from "styled-components";
import { NavLink as Link } from "react-router-dom";
import { faBars, FaChevronRight } from "react-icons/fa";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* background-color: #121917; */
  max-width: 120rem;
  padding: 1.6rem 3.2rem;
  margin: 0 auto;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  /* padding: 0 1rem; */
  height: 100%;
  font-size: 1rem;
  padding: 1rem 1.5rem;
  border-radius: 4px;
  font-weight: 600;

  &:hover {
    transition: all 0.2s ease;
    background: #1c1e53;
    color: #fff;
  }
`;

export const NavBtnLink = styled(Link)`
  /* background: #1c1e53; */

  color: #fff;
  outline: none;

  transition: all 0.2s ease;
  text-decoration: none;
  margin-right: 20px;
  font-weight: 700;
`;

export const Chevron = styled(FaChevronRight)`
  display: block;
  /* color: #1c1e53; */
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  /* margin-right: 24px; */
  align-content: space-between;
  display: flex;
  padding: 1rem 2rem;
  background: #1c1e53;
  /* background: #39514a; */
  border-radius: 4px;
  cursor: pointer;
  color: #fff;

  &:hover {
    transition: all 0.2s ease;
    opacity: 0.9;
    transform: scale(0.98);
  }

  &:hover ${NavBtnLink} {
    color: #fff;
  }
  &:hover ${Chevron} {
    color: #fff;
  }
`;

export const LeftSection = styled.div`
  display: flex;
  /* align-items: center;
  align-content: space-between; */
`;

export const MiddleSection = styled.div`
  display: flex;
`;

export const RightSection = styled.div`
  display: flex;
`;
