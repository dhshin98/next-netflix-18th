"use client";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import { HeaderLogo } from "@/components/HeaderLogo";

type Props = {};
function Header({}: Props) {
  return (
    <nav className="fixed top-[1.5rem] px-[1rem] flex items-center justify-between space-x-25">
      <Link href="/home">
        <HeaderLogo />
      </Link>
      <h1 className="text-white h-[1.9rem] text-header flex items-center">
        TV shows
      </h1>
      <h1 className="text-white h-[1.9rem] text-header flex items-center">
        Movies
      </h1>
      <h1 className="text-white text-header h-[1.9rem] flex items-center">
        My List
      </h1>
    </nav>
  );
}

export default Header;
