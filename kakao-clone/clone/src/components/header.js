import React from 'react';
import styled from "styled-components";

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

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>로고</Logo>
      <NavItems>
        <NavItem href="#">소개</NavItem>
        <NavItem href="#">이야기</NavItem>
        <NavItem href="#">뉴스</NavItem>
        <NavItem href="#">기술과 서비스</NavItem>
        <NavItem href="#">약속과 책임</NavItem>
      </NavItems>
    </HeaderContainer>
  );
}

export default Header;
