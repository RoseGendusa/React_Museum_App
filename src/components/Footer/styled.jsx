import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: black ;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  color: #fff;
  p{
    text-align:center;
  }
`;

const FooterLink = styled.a`
  color:#f8c476;
  text-decoration: none;
`

export { FooterContainer, FooterLink };
