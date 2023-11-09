"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { HeaderLogo } from "@/components/HeaderLogo";

type Props = {};
function Header({}: Props) {
  return (
    <nav className="fixed top-[1.5rem] left-1/2 transform -translate-x-1/2 flex items-center justify-between space-x-4 w-[375px] mb-2">
      <Link href="/home">
        <HeaderLogo />
      </Link>
      <h1 className="text-white text-header">TV shows</h1>
      <h1 className="text-white text-header">Movies</h1>
      <h1 className="text-white text-header">My List</h1>
    </nav>
  );
}

export default Header;

const HeaderBar = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 375px;
  height: 53px;
  z-index: 999;
`;
