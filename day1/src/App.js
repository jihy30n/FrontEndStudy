import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: Arial;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const Board = styled.div`
  background-color: green;
  height: 300px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: auto;
  word-break: break-all;
`;

const Text = styled.p`
  color: white;
  margin: 0;
  text-align:left;
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  box-sizing: border-box;
`;

function App() {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');
  const boardRef = useRef(null);

  const addPost = (e) => {
    e.preventDefault();
    if (newPost) {
      setPosts([...posts, newPost]);
      setNewPost('');
    }
  };

  useEffect(() => {
    if (boardRef.current) {
      boardRef.current.scrollTop = boardRef.current.scrollHeight;
    }
  }, [posts]);

  return (
    <AppContainer>
      <h1>칠판에 글 쓰기</h1>
      <Board ref={boardRef}>
        {posts.map((post, index) => (
          <Text key={index}>{post}</Text>
        ))}
      </Board>
      <form onSubmit={addPost}>
        <Input
          type="text"
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
          placeholder="글자를 입력해 주세요"
        />
      </form>
    </AppContainer>
  );
}

export default App;
