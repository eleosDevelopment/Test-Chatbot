import styled from "styled-components";
import Header from "../ui/Header";
import MainContent from "../features/home/MainContent";
import ChatFrame from "../features/home/ChatFrame";

const StyledHome = styled.div`
  width: 100%;
`;


function Home() {
  return (
    <StyledHome>
      <Header />
      <MainContent />
      <ChatFrame />
    </StyledHome>
  );
}

export default Home;
