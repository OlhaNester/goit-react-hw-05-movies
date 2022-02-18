import { Outlet } from "react-router-dom";
import { NavLink, Wrapper } from './Layout.styled';



export const Layout = () => {
  return (
    <>
      <Wrapper>
        <NavLink to="/">Home</NavLink>

        <NavLink to="/movies">Movies</NavLink>
      </Wrapper>
      <Outlet />
    </>
  );
};


