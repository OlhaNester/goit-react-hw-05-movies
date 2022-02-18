import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const NavLink = styled(RouterLink)`
  padding: 20px;
  display: flex;
  text-decoration: none;

  &.active
   {
    color: red;
  }
`;

export const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
