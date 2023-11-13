import React from 'react';
import styled from "styled-components";
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';
import Calendar from '../assets/calender';


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
                    카카오 소식입니다.
                </BannerText>
            </Banner>
            <Layout/>
            <Footer/>
        </MainContainer>
    );
}

export default Main;

const Banner = styled.div`
   display: flex;
   padding: 70px;
   align-items: center;
`;

const MainContainer = styled.div`
margin-left:10%;
margin-right:10%;
`

const BannerText  = styled.h3`
    font-size : 35px;
`
