import styled from "styled-components";
import React from "react";
type NavBarItemProps = {
  isActive: boolean;
  iconType?: "home" | "search" | "other";
};

export const NavbarItem = styled.div<NavBarItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > svg.homesearch-icon {
    /* home과 search 아이콘은 stroke 색상만 변경 */
    & > path {
      stroke: ${({ isActive }) =>
        isActive ? "rgba(255, 255, 255, 1)" : "rgba(140, 135, 135, 1)"};
    }
  }

  & > svg:not(.homesearch-icon) {
    /* 나머지 아이콘은  stroke 만 변경 */
    & > path {
      fill: ${({ isActive }) =>
        isActive ? "rgba(255, 255, 255, 1)" : "rgba(140, 135, 135, 1)"};
    }
  }
  /* text 색상변경 */
  & > span {
    font-size: 0.5125rem;
    margin-top: 0.1rem;
    color: ${({ isActive }) =>
      isActive ? "rgba(255, 255, 255, 1)" : "rgba(140, 135, 135, 1)"};
  }

  &:hover {
    cursor: pointer;
  }
`;

const NavBarItem = ({
  isActive,
  children,
  text,
  onClick,
  iconType,
}: {
  isActive: boolean;
  children: JSX.Element;
  text: string;
  onClick?: () => void;
  iconType: string;
}) => {
  const iconClass = iconType === "homesearch" ? "homesearch-icon" : "";
  return (
    <NavbarItem isActive={isActive} onClick={onClick}>
      {React.cloneElement(children, { className: iconClass })}
      <span>{text}</span>
    </NavbarItem>
  );
};

export default NavBarItem;
