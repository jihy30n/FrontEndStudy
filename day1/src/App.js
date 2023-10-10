import React, { useState } from 'react';
import styled from 'styled-components';


const AppContainer = styled.div`
  font-family: Arial;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Board = styled.div`
  background-color: green;
  height: 300px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow-y: auto;
  word-break: break-all;
`;

const Text = styled.p`
  color: white;
  margin: 0;
`;

const Input = styled.input`
  padding: 10px;
  width: 50%;
`;

function App() {
  
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  const addPost = () => {
    if (newPost) {
      setPosts([...posts, newPost]);
      setNewPost('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addPost();
    }
  };

  return (
    <AppContainer>
      <h1>1주차: 칠판에 글 쓰기</h1>
      <Board>
        {posts.map((post, index) => (
          <Text key={index}> {post} </Text>
        ))}
      </Board>
      <Input
        type="text"
        value={newPost}
        onChange={(e) => setNewPost(e.target.value)}
        placeholder="글자를 입력해주세요"
        onKeyPress={handleKeyPress}
      />
    </AppContainer>
  );
}

export default App;
