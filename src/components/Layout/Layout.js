import { NavLink } from "react-router-dom";

import styled from "styled-components";


const Wrapper = styled.div`
padding: 40px;`

  const  Layout = () => {
    return (
        <>
            <Wrapper>
        <NavLink to="/">Home</NavLink>
        
            <NavLink to="/movies">Movies</NavLink>
            
            </Wrapper>
            
        </>
    );
} ;

export default Layout;