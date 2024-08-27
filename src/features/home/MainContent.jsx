import styled from "styled-components";
import Container from "../../ui/Container";

const StyledMain = styled.section`
  width: 100%;
  height: 75vh;
  margin-top: 20px;

  background-image: url(https://firebasestorage.googleapis.com/v0/b/eleos-devlopers.appspot.com/o/sample%2Fimgix.jpg?alt=media&token=d1b5eb6b-1cd2-4d68-aacd-b919158866aa);
  background-position: center;
  border-radius: 25px;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
`;

const LeftMain = styled.div`
  width: 450px;
  padding: 10px 25px;
  color: var(--color-white-smoke);

  -webkit-backdrop-filter: blur(7px);
  backdrop-filter: blur(7px);
  background-color: var(--color-bc-white-50);

  border-radius: 10px;
  font-size: 2rem;
`;

const Button = styled.button`
  width: 150px;
  padding: 10px 5px;
  margin: 15px 0px 20px;

  background-color: var(--color-canary);
  border: 2px solid var(--color-canary);
  border-radius: 10px;

  font-size: 1rem;
  font-weight: 600;
`

function MainContent() {
  return (
    <StyledMain>
      <Container layout="center" style={{ borderRadius: "10px" }}>
        <LeftMain>
          <h2 style={{margin:"10px 0px"}}>Fully Managed Cloud & Web Hosting</h2>
          <p style={{ fontSize: "1rem", margin: "0px" }}>
            Dedicated resources, full root access, easy scaling vps and
            dedicated servers
          </p>
          <Button>
            View Planes
          </Button>
        </LeftMain>
      </Container>
    </StyledMain>
  );
}

export default MainContent;
