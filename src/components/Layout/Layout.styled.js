import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  padding: 20px;
  display: flex;
  :active, :focus{
    color: red;
  }
  
`;

export const Wrapper = styled.div`
  justify-content: center;
  display: flex;
  
  `;
