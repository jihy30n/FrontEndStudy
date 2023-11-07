import React, { useState } from 'react';
import styled from "styled-components";

const HeaderContainer = styled.div`
   display: flex;
   justify-content: space-between;
   padding: 20px;
   align-items: center;
   margin-left:70px;
   margin-right:70px;

`;

const Logo = styled.div`
   margin-left: 50px;
`;

const NavItems = styled.div`
   display: flex;
   justify-content: center;
`;

const NavItem = styled.a`
   margin-right: 50px;
   text-decoration: none;
`;

const TogleButtons = styled.div`
   display: flex;
   align-items: center;
`;

const TogleButton = styled.button`
  background-color: black;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  margin: 0 5px;
`;

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [langugeMode, setLanguageMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleLangugeMode = () => {
    setLanguageMode(!langugeMode);
  };

  return (
    <HeaderContainer>
      <Logo>kakao</Logo>
      <NavItems>
        <NavItem href="#">소개</NavItem>
        <NavItem href="#">이야기</NavItem>
        <NavItem href="#">뉴스</NavItem>
        <NavItem href="#">기술과 서비스</NavItem>
        <NavItem href="#">약속과 책임</NavItem>
      </NavItems>
      <TogleButtons>
        <TogleButton onClick={toggleLangugeMode}>
          {langugeMode ? "korean" : "English"}
        </TogleButton>
        <TogleButton onClick={toggleDarkMode}>
          {darkMode ? "라이트 모드" : "다크 모드"}
        </TogleButton>
      </TogleButtons>
    </HeaderContainer>
  );
}

export default Header;
