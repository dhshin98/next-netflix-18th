"use client";

import styled from "styled-components";

export const BackgroundImg = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <ImageWrapper>
      <Image src={imageUrl} alt={"backgroundImg"} />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
  overflow: hidden;
  width: 375px;
  height: 415px;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 40%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0));
    z-index: 2;
  }
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 415px;
  position: relative;
`;
