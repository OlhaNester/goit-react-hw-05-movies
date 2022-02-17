import styled from "styled-components";

export const Thumb = styled.div`
  height: 300px;
  width: 200px;
  margin-right: auto;
  margin-left: auto;

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: 50% 50%;
  }
`;

export const MovieCard = styled.div`
  p {
    margin-top: 0;
    margin-bottom: 0;
  }

  text-decoration: none;
  padding: 10px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;
