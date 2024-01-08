import React, {useState, useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPost } from "../redux/actions";
import { IoClose } from "react-icons/io5";
import { LuMoreVertical } from "react-icons/lu";
import styled from "styled-components";
import data from "../data/maindata.json";


const LargePost = () => {
    const post = data.post;
     const selectedPost = useSelector((state) => state.selectedPost);
  const dispatch = useDispatch();

  const handlePostClick = (postId) => {
    dispatch(setSelectedPost(postId));
  };

  const handleShareButtonClick = (e, postId) => {
    e.stopPropagation();
    dispatch(setSelectedPost(postId));
  };


    return (
      <LargePostItem>
      {post.map((post) => (
        <React.Fragment key={post.id}>
          {post.size === "large" && (
            <PostItem
              onClick={() => handlePostClick(post.id)}
              isSelected={selectedPost === post.id}
            >
              <h2>{post.title}</h2>
              <p>{post.tags}</p>
              <ShareButtonWrapper>
              <ShareButton
                onClick={(e) => handleShareButtonClick(e, post.id)}
                isSelected={selectedPost === post.id}
              >
                {selectedPost === post.id ? <IoClose /> : <LuMoreVertical />}
              </ShareButton>
              </ShareButtonWrapper>
            </PostItem>
          )}
        </React.Fragment>
      ))}
    </LargePostItem>
        
    );
}

export default LargePost;


const LargePostItem = styled.div`
  flex-basis: 600px;
  flex-shrink: 0;
  font-size: 20px;
  position: sticky;
  top: 100px;
  align-self: flex-start;
`;

const ShareButtonWrapper = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ShareButton = styled.button`
  font-size: 20px;
  background: transparent;
  border: none;
  cursor: pointer;
  color: ${(props) => (props.isSelected ? "#fff" : "grey")};
  display: flex;
  align-items: center;
`;

const PostItem = styled.div`
  position: relative;
  box-shadow: #d4d4d4 0px 30px 60px 0px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: ${(props) => (props.isSelected ? "#333" : "white")};
  transition: background-color 0.3s ease;
`;