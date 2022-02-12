import { NavLink, Outlet } from "react-router-dom";

import styled from "styled-components";

const Link = styled(NavLink)`
  display: flex;
  gap: 20px;
`;

const Wrapper = styled.div`
  padding: 40px;
`;

const Layout = () => {
  return (
    <>
      <Wrapper>
        <Link to="/">Home</Link>

        <Link to="/movies">Movies</Link>
      </Wrapper>
      <Outlet />
    </>
  );
};

export default Layout;
