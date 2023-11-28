import React from 'react';
import styled from "styled-components";
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Calendar from '../assets/calender';
import '../assets/fonts/fonts.css'; 


const Main = () => {
    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;

    return (
        <MainContainer>
            <Header/>
            <Banner>
                <Calendar/>
                <BannerText>
                    {formattedDate}에 전하는<br></br>
                    카카오 소식입니다
                </BannerText>
            </Banner>
            <Layout/>
            <Footer/>
        </MainContainer>
    );
}

export default Main;

const Banner = styled.div`
   padding: 70px;
   display: flex;
   align-items: center;

`;

const MainContainer = styled.div`
    font-family: 'kakao-big-bold';
    @media (max-width: 1170px) {
        padding: 0px 20%;
    
      }
      @media (max-width: 900px) {
        padding: 0px 10%;
    
      }
       
`
const BannerText  = styled.h3`
    margin-left: 20px;
    font-size : 40px;
    @media (max-width: 1170px) {
        font-size : 30px;
    }
    @media (max-width: 900px) {
        margin-left: 10px;
        font-size : 25px;

    }
`
