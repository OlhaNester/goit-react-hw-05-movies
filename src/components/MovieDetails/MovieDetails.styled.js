import styled from "styled-components";
import { NavLink as RouterLink } from "react-router-dom";

export const NavLink = styled(RouterLink)`
  padding: 20px;
  //display: flex;
  text-decoration: none;

  &.active
   {
    color: red;
  }
`;

export const MovieContainer = styled.div`
  display: flex;

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }
  ul {
    padding: 0;
  }
  li {
    list-style-type: none;
    padding: 0;
  }
  p {
    margin: 16px;
  }
`;

export const InfoContainer = styled.div`
  text-align: center;
`;
