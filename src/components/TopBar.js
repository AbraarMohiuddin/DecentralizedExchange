/*Abraar Mohiuddin Syed
103795990*/
// TopBar.js
//This is the topbar, a bar below the navigation menu. Mainly for decorative purposes.
import React from "react";
import styled from "styled-components";

const Bar = styled.div`
  background-color: #0A1248;
  color: white;
  padding: 20px 0;
  text-align: center;
  font-family: 'Open Sans', sans-serif; /* Set font family */
  font-size: 18px;

`;

const TopBar = ({ text }) => {
  return <Bar>{text}</Bar>;
};

export default TopBar;
