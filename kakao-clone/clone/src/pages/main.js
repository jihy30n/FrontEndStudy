import React from 'react';
import styled from "styled-components";

import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';

const MainContainer = styled.div`
   display: flex;
   padding: 70px;
   align-items: center;
   margin-left:7%;
   margin-right:7%;
`;

const Main = () => {
    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;

    return (
        <div>
            <Header/>
            <MainContainer>
            <img src="" alt="달력아이콘" width="" height=""/>
                <h1>{formattedDate}에 전하는 <br></br> 카카오 소식입니다</h1>
            </MainContainer>
            <Layout/>
            <Footer/>
        </div>
    );
}

export default Main;
