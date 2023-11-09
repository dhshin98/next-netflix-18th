"use client";
import {
  HomeIcon,
  SearchIcon,
  DownloadIcon,
  MoreIcon,
  PlayIcon,
} from "../../public/svgs";

import NavBarItem from "./navbaritem";
import styled from "styled-components";
import { useRouter, usePathname } from "next/navigation";

const NavBar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };

  return (
    <NavBarContainer>
      <NavBarItem
        isActive={pathname === "/home"}
        text="Home"
        onClick={() => handleNavigate("/")}
        iconType="homesearch"
      >
        <HomeIcon />
      </NavBarItem>
      <NavBarItem
        isActive={pathname === "/search"}
        text="Search"
        onClick={() => handleNavigate("/search")}
        iconType="homesearch"
      >
        <SearchIcon />
      </NavBarItem>
      <NavBarItem
        isActive={pathname === "/comingsoon"}
        text="Coming Soon"
        onClick={() => handleNavigate("/comingsoon")}
        iconType="other"
      >
        <PlayIcon />
      </NavBarItem>
      <NavBarItem
        isActive={pathname === "/download"}
        text="Downloads"
        onClick={() => handleNavigate("/download")}
        iconType="other"
      >
        <DownloadIcon />
      </NavBarItem>
      <NavBarItem
        isActive={pathname === "/more"}
        text="More"
        onClick={() => handleNavigate("/more")}
        iconType="other"
      >
        <MoreIcon />
      </NavBarItem>
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
