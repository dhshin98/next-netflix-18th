import Image from "next/image";
import styled from "styled-components";

//home 화면 가장 위에 보이는 image
export const BackgroundImg = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <ImageWrapper>
      <Image
        src={imageUrl}
        alt={"backgroundImg"}
        layout="fill"
        objectFit="cover"
      />
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

//홈화면 중간에 동그라미로 보이는 image
export const Previews = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div
      style={{ width: "6.375rem", height: "6.375rem", position: "relative" }}
    >
      <Image
        src={imageUrl}
        alt="previewimage"
        layout="fill"
        objectFit="cover"
        className="rounded-full"
      />
    </div>
  );
};

//홈화면 아래쪽에 보니는 image
export const SquareImg = ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div
      style={{ width: "6.4375rem", height: "10.0625rem", position: "relative" }}
    >
      <Image
        src={imageUrl}
        alt="popularimage"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};
