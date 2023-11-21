import React from 'react';
import styled from "styled-components";
import data from '../data/maindata.json';

const Layout = () => {
  const post = data.post;

  return (
    <PostGrid>
      <LargePostItem>
        {post.map((post) => (
          <React.Fragment key={post.id}>
            {post.id === "1" && (
              <PostItem>
                <h2>{post.title}</h2>
                <p>{post.tags}</p>
              </PostItem>
            )}
          </React.Fragment>
        ))}
      </LargePostItem>
      <SmallPostItem>
        {post.map((post) => (
          <React.Fragment key={post.id}>
            {post.id !== "1" && (
              <PostItem>
                <h2>{post.title}</h2>
                <p>{post.tags}</p>
              </PostItem>
            )}
          </React.Fragment>
        ))}
      </SmallPostItem>
    </PostGrid>
  );
};

export default Layout;

const PostGrid = styled.div`
  display: flex;
  gap: 30px;
  margin: 0;
  padding: 0px 4%;
  flex-wrap: wrap;
`;

const PostItem = styled.div`
  background-color: white;
  box-shadow: #d4d4d4 0px 30px 60px 0px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
`;

const LargePostItem = styled.div`
  flex-basis: 700px;
  flex-shrink: 0;
  font-size:20px;
  margin-bottom: 30px;
`;

const SmallPostItem = styled.div`
  flex-shrink: 0;
  margin-bottom: 30px;
  font-size:13px;
`;
