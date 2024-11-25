//Abraar Mohiuddin Syed
//103795990
//This the styling for the Navbar that displays on top of screen. It redirects to different pages of the website.

import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";


export const Nav = styled.nav`
  background: white;
  font-family: 'Playfair Display', sans-serif; /* Set font family */
  
  height: 70px;
  font-size:17px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;

  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    font-size: 14px;
  }
`;


export const NavLinkWithIcon = styled(Link)`
  color: black;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 700;
  display: flex; /* Added */
  align-items: center; /* Added */
  gap: 0.5rem; /* Added gap between icon and text */
  transition: background-color 0.3s, color 0.3s;

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 0.3rem 0.5rem;
    gap: 0.3rem;
  }

  &.active {
    color: #0077da;
  }
`;

export const NavLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-weight: 700;
  transition: background-color 0.3s, color 0.3s;


  &.active {
    color: #4d4dff;
  }
`;

export const ConnectWalletButton = styled.button`
  background-color: white;
  font-family: 'Open Sans', sans-serif; /* Set font family */

  color: #1A237E;
  border: 1px solid #ffffff;
  border-radius: 8px;
  padding: 0.8rem 1.5rem;
  font-weight: 500;
  border-color: #191970;

  font-size: 1rem; /* Increase font size for a bigger button */

  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;

  &:hover {
    background-color: #1A237E;
    color: white;
    border-color: #191970;
  }

  @media (max-width: 768px) {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #ffffff;
  font-size: 1.8rem;
  cursor: pointer;
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  padding-right: 1rem; 

`;

export const NavBtn = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px;
`;







