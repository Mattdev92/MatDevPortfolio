import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { NavigationWrapperProps } from './navigation.types';

export const NavWrapper = styled.nav<NavigationWrapperProps>`
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme, mobile }) =>
    mobile ? theme.colors.mobile : theme.colors.main};
  grid-column: 1/3;
  grid-row: 1/4;
  width: auto;
  transition: width 1s ease-in;
  @media (max-width: 1440px) {
    justify-content: center;
  }
  @media (max-width: 580px) {
    transform: ${({ mobile }) =>
      mobile ? 'translateX(0)' : 'translateX(-300px)'};
    justify-content: space-evenly;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    width: 300px;
    height: 100vh;
    transition: all 0.3s ease-in;
  }
`;

export const StyledIcon = styled(NavLink)`
  position: absolute;
  top: 20px;
  @media (max-width: 1440px) {
    top: 5px;
  }
  @media (max-width: 580px) {
    position: relative;
  }
`;
