import React, {useState, useEffect} from "react";
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

  /// 페이지 안에 들어오는지 감지하기,,,,
  const [smallPostFixed, setSmallPostFixed] = useState(false);

  const isSmallPostItemVisible = () => {
    const smallPostElement = document.getElementById("smallPostItem");
    if (smallPostElement) {
      const rect = smallPostElement.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };
  const handleScroll = () => {
    const isVisible = isSmallPostItemVisible();
    setSmallPostFixed(!isVisible);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 
  ///

  return (
    <PostGrid>
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
      <SmallPostItem id="smallPostItem" isFixed={smallPostFixed}> 
        {post.map((post) => (
          <React.Fragment key={post.id}>
            {post.size === "small" && (
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

const LargePostItem = styled.div`
  flex-basis: 700px;
  flex-shrink: 0;
  font-size: 20px;
  position: sticky;
  top: 100px;
  align-self: flex-start;
`;

const SmallPostItem = styled.div`
  flex-basis: 300px;
  flex-shrink: 0;
  font-size: 13px;
  position: relative;
  @media(max-width: 1170px) {
      position: static;
    }
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