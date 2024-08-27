import styled from "styled-components";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaLinkedinIn,
  FaServer,
} from "react-icons/fa6";

import Container from "./Container";

const StyledHeader = styled.header`
  width: 100%;
  margin-top: 10px;
  background-color: var(--color-blue);
  box-shadow: 0px 0px 10px var(--color-blue);
  border-radius: 25px;
  color: var(--color-white-smoke);

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: auto;

  & svg {
    width: 25px;
    height: 25px;
    cursor: pointer;
  }

  & svg:hover {
    color: var(--color-grey-500);
  }
`;

const StyledMenu = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;

  & li {
    cursor: pointer;
    width: 90px;
    margin-right: 25px;

    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    & span:hover {
      color: var(--color-skyblue);
      font-weight: 600;
    }
  }
`;

function Header() {
  return (
    <StyledHeader>
      <Container layout="center">
        <FaServer
          style={{ marginRight: "10px", color: "var(--color-canary)" }}
        />
        <h2 style={{ color: "var(--color-canary)" }}>Hosting Services &+</h2>
      </Container>
      <Container layout="center">
        <StyledMenu>
          <li>
            <span>Home</span>
          </li>
          <li>
            <span>Pricing</span>
          </li>
          <li>
            <span>Services</span>
          </li>
          <li>
            <span>Contact Us</span>
          </li>
        </StyledMenu>
      </Container>
      <Container layout="center">
        <FaFacebook style={{ margin: "0px 10px" }} />
        <FaInstagram style={{ margin: "0px 10px" }} />
        <FaWhatsapp style={{ margin: "0px 10px" }} />
        <FaLinkedinIn style={{ margin: "0px 10px" }} />
      </Container>
    </StyledHeader>
  );
}

export default Header;
