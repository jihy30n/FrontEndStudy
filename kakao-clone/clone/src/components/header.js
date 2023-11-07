import React, { useState } from 'react';
import styled from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdjust, faLanguage } from '@fortawesome/free-solid-svg-icons';

const HeaderContainer = styled.div`
   display: flex;
   padding: 20px;
`;

const Logo = styled.div`
   margin-right: 20px;
`;

const NavItems = styled.div`
   display: flex;
`;

const NavItem = styled.a`
   margin-right: 20px;
   text-decoration: none;
`;

const togleButtons = styled.div`
    margin: 50px;


`

const togleButton = styled.button`

  background-color: black;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;

`

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
      <Logo><img src="https://picsum.photos/74/24" alt="logo"/></Logo>
      <NavItems>
        <NavItem href="#">소개</NavItem>
        <NavItem href="#">이야기</NavItem>
        <NavItem href="#">뉴스</NavItem>
        <NavItem href="#">기술과 서비스</NavItem>
        <NavItem href="#">약속과 책임</NavItem>
      </NavItems>
      <togleButtons>
        <togleButton onClick={toggleLangugeMode}>
          {langugeMode ? "korean":"English"}
        {/* <FontAwesomeIcon icon={Language} /> */}
      </togleButton>
      <togleButton onClick={toggleDarkMode}>
        {darkMode ? "라이트 모드" : "다크 모드"}
      </togleButton>
      </togleButtons>
     
    </HeaderContainer>
  );
}

export default Header;
