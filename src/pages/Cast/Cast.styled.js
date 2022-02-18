import styled from "styled-components";

export const CastList = styled.ul`
display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  li {
    text-align: center;
  }
  `

export const Thumb = styled.div`
height: 225px;
  width: 150px;
  margin-right: auto;
  margin-left: auto;
    img {
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: 50% 50%;
}`