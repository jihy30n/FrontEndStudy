import React from 'react';
import styled from "styled-components";

const Footer = () => {
    return (
      <FooterContainer>
        <FooterLink href="#">이용약관</FooterLink>
        <FooterLink href="#">위치정보 이용약관</FooterLink>
        <FooterLink href="#">개인정보처리방침</FooterLink>
        <FooterLink href="#">운영정책</FooterLink>
        <FooterLink href="#">청소년보호정책</FooterLink>
        <FooterLink href="#">브랜드보호정책</FooterLink>
        <FooterLink href="#">권리침해신고안내</FooterLink>
        <FooterLink href="#">공지사항</FooterLink>
        <FooterLink href="#">사이버윤리실</FooterLink>
        <FooterLink href="#">Contact Us</FooterLink>
        <p>© Kakao Corp. All rights reserved.</p>
      </FooterContainer>
    );
  }
  

  const FooterContainer = styled.div`
  background:white;
  left: 0;
  bottom: 0;
  font-size:12px;
  margin:0;
  padding: 70px 50px;

  

`;

const FooterLink = styled.a`
  margin-right: 20px;
  text-decoration: none;
  color: black;
`;


  export default Footer;
  
  
  
  
  
  