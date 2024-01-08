import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { LuMoreVertical } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { setSelectedPost } from "../redux/actions";
import data from "../data/maindata.json";
import SmallPost from "./smallpost";
import LargePost from "./largepost";

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

  return (
    <PostGrid>
      <LargePost/>
      <SmallPost/>
      <LargePost/>
      <SmallPost/>
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
