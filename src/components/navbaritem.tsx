import styled from "styled-components";
type NavBarItemProps = {
  isActive: boolean;
};

export const NavbarItem = styled.div<NavBarItemProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* icon 테두리 색상변경 */
  & > svg > path {
    stroke: ${({ isActive }) =>
      isActive ? "rgba(255, 255, 255, 1)" : "rgba(140, 135, 135, 1)"};
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
}: {
  isActive: boolean;
  children: JSX.Element;
  text: string;
  onClick?: () => void;
}) => {
  return (
    <NavbarItem isActive={isActive} onClick={onClick}>
      {children}
      <span>{text}</span>
    </NavbarItem>
  );
};

export default NavBarItem;
