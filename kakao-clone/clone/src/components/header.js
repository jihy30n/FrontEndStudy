import React, { useState } from 'react';
import styled from "styled-components";
import logo from '../assets/img/kakao_logo.svg';
// import {GrLanguage} from "react-icons/fa";


const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [langugeMode, setLanguageMode] = useState(false);

  const search = () => {
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLangugeMode = () => {
    setLanguageMode(!langugeMode);
  };

  return (
    <HeaderContainer>
      <Nav>
      <Logo><img src={logo} alt="로고" width="70px"></img></Logo>
      <CenteredNavItems>
        <NavItem href="#">소개</NavItem>
        <NavItem href="#">이야기</NavItem>
        <NavItem href="#">뉴스</NavItem>
        <NavItem href="#">기술과 서비스</NavItem>
        <NavItem href="#">약속과 책임</NavItem>
        </CenteredNavItems>
      <TogleButtons>
        <TogleButton onClick={search}>
          {"search"}
        </TogleButton>
        <TogleButton onClick={toggleLangugeMode}>
          {langugeMode ? "korean" : "English"}
        </TogleButton>
        <TogleButton onClick={toggleDarkMode}>
          {darkMode ? "light" : "dark"}
          {/* <GrLanguage/> */}
        </TogleButton>
      </TogleButtons>
      <Hamburger>
        menu
        </Hamburger>
      </Nav>
    </HeaderContainer>
  );
}


const HeaderContainer = styled.header`
  display: flex;
  background-color: white;
  margin: 0;
  padding: 0px 60px;
  width: 100%;
  box-sizing: border-box;
`;


const Nav = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  width: 100%;
  box-sizing: border-box;
`;

const Logo = styled.div`
   margin-right: auto;
   display: flex;
   padding:24px;
`;
const CenteredNavItems = styled.div`
  display: flex;
  align-items: center;
  margin-right: auto;
`;

const NavItem = styled.a`
  margin-right: 20px;
  text-decoration: none;
  font-size: 15px;
  padding: 0 28px;
  justify-content: center;

  @media (max-width: 1100px) {
    display: none;
  }
`;



const TogleButtons = styled.div`
   display: flex;
   align-items: center;
   justify-content: flex-end;

   @media (max-width: 1100px) {
    display: none;
  }
`;

const TogleButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  justify-content: flex-end;
  padding: 8px 16px;
  cursor: pointer;
  margin: 0 5px;
`;
const Hamburger = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  margin: 0 5px;
  
  @media (min-width: 1100px) {
    display: none;
  }
`;


export default Header;
