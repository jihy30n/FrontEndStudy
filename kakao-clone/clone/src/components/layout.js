import React from 'react';
import styled from "styled-components";
import data from '../components/maindata.json'

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

//flex
const PostGrid = styled.div`
  display: flex;
  grid-template-columns: 2fr 1fr 1fr; 
  grid-gap: 30px;
  @media (max-width: 768px) {
    grid-template-columns: 2fr 1fr; 
  }

`; 

const PostItem = styled.div`
  background-color: white;
  box-shadow: #d4d4d4 0px 30px 60px 0px;
  padding: 20px;
  border-radius: 10px;
`;
