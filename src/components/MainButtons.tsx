"use client";
import { PlusIcon, MainPlayIcon, InfoIcon } from "../../public/svgs";
import styled from "styled-components";

const MainButtons = () => {
  return (
    <MainButtonContainer className="flex-basis">
      <IconContainer>
        <PlusIcon />
        <IconCaption>My List</IconCaption>
      </IconContainer>
      <PlayButtonCard>
        <MainPlayIcon />
        Play
      </PlayButtonCard>
      <IconContainer>
        <InfoIcon />
        <IconCaption>Info</IconCaption>
      </IconContainer>
    </MainButtonContainer>
  );
};

const MainButtonContainer = styled.div`
  width: 100%;
  height: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 3rem;
  align-items: center;
  color: white;
  margin-top: 0.69rem;
  margin-bottom: 1.44rem;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;
const IconCaption = styled.span`
  font-size: 0.85263rem;
  margin-top: 0.1rem;
`;
const PlayButtonCard = styled.div`
  display: flex;
  font-size: 1.27888rem;
  font-weight: 600;
  border-radius: 0.35156rem;
  width: 6.91406rem;
  height: 2.8125rem;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  color: black;
  background-color: #c4c4c4;
`;
export default MainButtons;
