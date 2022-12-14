import styled from 'styled-components';
import { Link as LinkRouter, NavLink } from 'react-router-dom';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  background: ${({ theme }) => theme.colors.mainBg};
  /* background:linear-gradient(135deg, #ffe985 0%,#fa742a 100%); */
  height: 170px;
  top: 0;
  z-index: 10;
  padding: 0;
  margin: 0;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease-in-out;
  }
`;

export const NavList = styled.div`
  display: flex;
  align-items: right;
  justify-content: flex-end;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`;

export const LogoName = styled.div`
  display: flex;
  color: black;
  /* color: ${({ theme }) => theme.colors.fontColor}; */
  align-content: flex-start;
  font-size: 2rem;
  align-items: center;
  margin-left: 24px;
  text-decoration: none;
  transition: 0.2s ease-in-out;
  cursor: pointer;

  :hover {
    color: #a0897f;
  }
`;

export const LogoIcon = styled.img`
  height: 160px;
  width: 160px;
`;

export const HamburgerIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.colors.fontColor};
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: 22px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

export const NavItems = styled(NavLink)`
  display: flex;
  font-size: 1.4rem;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  color: ${({ theme }) => theme.colors.fontColor};
  
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverColor};
  }

  &.active {
    border-bottom: 5px solid ${({ theme }) => theme.colors.activeNavLink};
  }
`;

export const NavItem2 = styled.div`

display: flex;
  font-size: 1.4rem;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  color: ${({ theme }) => theme.colors.fontColor};
  
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.hoverColor};
  }

  &.active {
    border-bottom: 5px solid ${({ theme }) => theme.colors.activeNavLink};
  }
`