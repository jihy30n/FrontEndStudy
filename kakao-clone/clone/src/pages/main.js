import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
import Layout from '../components/layout';


const Main = () => {
    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}월 ${today.getDate()}일`;

    return (
        <div>
            <Header/>
            <h1>{formattedDate}에 전하는 카카오 소식입니다</h1>
            <Layout/>
            <Footer/>
        </div>
    );
}

export default Main;
