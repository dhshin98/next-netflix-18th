"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { HeaderLogo } from "@/components/HeaderLogo";

type Props = {};
function Header({}: Props) {
  return (
    <nav className="fixed top-[1.5rem] flex items-center left-0 space-x-25 h-[3.56rem] mb-2">
      <Link href="/home">
        <HeaderLogo />
      </Link>
      <h1 className="text-white">TV shows</h1>
      <h1 className="text-white">Movies</h1>
      <h1 className="text-white">My List</h1>
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
