import React from 'react';
import styled from "styled-components";
import data from '../components/maindata.json'


const PostGrid = styled.div`
  display: grid;
  margin-left: 10%;
  margin-right:10%;
  grid-template-columns: 2fr 1fr 1fr; //수정필요 - 그리드 공부
  grid-gap: 30px;
`; 

const PostItem = styled.div`
  background-color: white;
  box-shadow: #d4d4d4 0px 30px 60px 0px;
  padding: 20px;
  border-radius: 10px;
`;

const Layout = ()=> {
    const post = data.post;
    return(
        <PostGrid>
            {post.map((post) => (
        <PostItem key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.tags}</p>
        </PostItem>
      ))}
        </PostGrid>

    );
   
}
export default Layout;