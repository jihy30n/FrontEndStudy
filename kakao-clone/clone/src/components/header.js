import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import logo from '../assets/img/kakao_logo.svg';
import { GrLanguage } from 'react-icons/gr';
import { BsMoon } from 'react-icons/bs';
import { GoSearch } from 'react-icons/go';
import { PiHamburger } from 'react-icons/pi';

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector('header');
      const headerHeight = header.clientHeight;
      const scrollPosition = window.scrollY;

      if (headerHeight <= scrollPosition) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <HeaderContainer isFixed={isFixed}>
      <Nav>
        <Logo>
          <img src={logo} alt="로고" width="70px" />
        </Logo>
        <NavItems>
          <NavItem href="#">소개</NavItem>
          <NavItem href="#">이야기</NavItem>
          <NavItem href="#">뉴스</NavItem>
          <NavItem href="#">기술과 서비스</NavItem>
          <NavItem href="#">약속과 책임</NavItem>
        </NavItems>
        <TogleButtons>
          <FixedButton>
            <GoSearch size="20" />
          </FixedButton>
          <TogleButton>
            <GrLanguage size="20" />
          </TogleButton>
          <TogleButton>
            <BsMoon size="20" />
          </TogleButton>
          <HamburgerButton>
            <PiHamburger size="25" />
          </HamburgerButton>
        </TogleButtons>
      </Nav>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  background-color: white;
  margin: 0;
  padding: 0px 4%;
  width: 100%;
  box-sizing: border-box;
  position: ${(props) => (props.isFixed ? 'fixed' : 'relative')};
  z-index: 10;

  @keyframes down {
    0% {
      transform: translateY(-50px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;
  const Nav = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    width: 100%;
    cursor:pointer;
    box-sizing: border-box;
    &:not(:hover) a{
      color: black;
    }
  `;

  const Logo = styled.div`
    margin-right: auto;
    display: flex;
    padding:24px;

  `;

  const NavItems = styled.div`
    display: flex;
    align-items: center;
    margin-right: auto;
    &:hover a{
      color: grey;
    }
    
  `;

  const NavItem = styled.a`
    text-decoration: none;
    font-size: 16px;
    justify-content: center;
    color: black;
    padding: 0px 28px;

    @media (max-width: 1170px) {
      display: none;
    }
  `;

  const TogleButton = styled.div`
    margin-right:10px;
    border: none;
    justify-content: flex-end;
    cursor: pointer;
    @media (max-width: 1170px) {
      display: none;
    }

  `;
  const TogleButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 8px 16px;
  `;


  const FixedButton = styled.p`
    border: none;
    justify-content: flex-end;
    cursor: pointer;
    margin-right: 10px;

  `;


  const HamburgerButton = styled.p`
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    margin: 0 5px;

    @media (min-width: 1170px) {
      display: none;
    }
  `;


  export default Header;
