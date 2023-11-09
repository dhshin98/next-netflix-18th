"use client";
import {
  HomeIcon,
  SearchIcon,
  DownloadIcon,
  MoreIcon,
  PlayIcon,
} from "../../public/svgs";

import NavBarButton from "./navbarbutton";
import styled from "styled-components";
const NavBar = () => {
  return (
    <NavBarContainer>
      <HomeIcon />
      <SearchIcon />
      <PlayIcon />
      <DownloadIcon />
      <MoreIcon />
    </NavBarContainer>
  );
};

const NavBarContainer = styled.nav`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  height: 53px;
  background-color: #000;
  z-index: 999;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  color: white;
`;
export default NavBar;
