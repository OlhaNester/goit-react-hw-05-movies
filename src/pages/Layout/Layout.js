import { Outlet } from "react-router-dom";
import { Link, Wrapper } from './Layout.styled';


export const Layout = () => {
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


