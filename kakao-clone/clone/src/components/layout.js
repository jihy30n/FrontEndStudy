import React from "react";
import styled from "styled-components";
import { LuMoreVertical } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPost } from "../redux/actions";
import data from "../data/maindata.json";

const Layout = () => {
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
    <PostGrid>
      <LargePostItem>
        {post.map((post) => (
          <React.Fragment key={post.id}>
            {post.id === "1" && (
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
      <SmallPostItem>
        {post.map((post) => (
          <React.Fragment key={post.id}>
            {post.id === "2" && (
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
                    <LuMoreVertical />
                  </ShareButton>
                </ShareButtonWrapper>
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
  position: relative;
  box-shadow: #d4d4d4 0px 30px 60px 0px;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 30px;
  background-color: ${(props) => (props.isSelected ? "#333" : "white")};
  transition: background-color 0.3s ease;

  &:active {
    background-color: ${(props) => (props.isSelected ? "#333" : "#e0e0e0")};
  }
`;

const LargePostItem = styled.div`
  flex-basis: calc(50% - 20px);
  flex-shrink: 0;
  font-size: 20px;
`;

const SmallPostItem = styled.div`
  flex-basis: calc(20% - 15px);
  flex-shrink: 0;
  font-size: 13px;
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

  &:hover {
    color: #000;
  }
`;