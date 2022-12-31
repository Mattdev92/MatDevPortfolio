import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledText = styled.span`
  width: 100%;
  width: auto;
  margin: 5px 0;
`;

export const StyledIcon = styled.span`
  opacity: 100%;
`;

export const StyledLink = styled(NavLink)`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  text-decoration: none;
  color: black;
  margin: 15px 0;
  &.active {
    &:before {
      content: '';
      position: absolute;
      display: flex;
      justify-content: center;
      top: 60px;
      left: 50%;
      transform: translateX(-50%);
      height: 30px;
      width: 50%;
      border-bottom: 1px solid black;
    }
  }
  @media (max-width: 1440px) {
    margin: 10px 0;
    &.active {
      &:before {
        top: 40px;
      }
    }
  }
  @media (max-width: 580px) {
    &.active {
      &:before {
        content: '';
        border: none;
      }
    }
  }
`;
