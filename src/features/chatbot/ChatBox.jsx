import styled from "styled-components";
import Input from "../../ui/Input";
import Container from "../../ui/Container";
import { IoMdSend } from "react-icons/io";
import ChatMessage from "./ChatMessage";

const StyledBox = styled.div`
  width: 450px;
  height: 525px;

  border-radius: 10px;
`;

const StyledChat = styled.div`
  margin: 50px auto 10px;
  width: 425px;
  height: 450px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-end;

  background-color: var(--color-grey-200);
  border: 2px solid var(--color-grey-400);
  border-radius: 10px;

  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-grey-100);
    border-radius: 5px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--color-grey-500);
    border-radius: 5px;
  }
`;

const StyledMsg = styled.div`
  margin: 0 auto;
  min-height: 50px;
  max-height: 100px;
  width: 360px;

  border: 2px solid var(--color-blue);
  border-radius: 10px;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const ButtonSend = styled.button`
  width: 50px;
  height: 50px;
  cursor: pointer;

  border: 2px solid var(--color-blue);
  border-radius: 50%;
  background-color: var(--color-blue);

  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & svg {
    height: 25px;
    width: 25px;
    color: var(--color-canary);
  }
`;

function ChatBox() {
  const messages = [
    {
      id: "1",
      text: "hi i need assistant",
      sender: "user",
      time:"10:30am",
    },
    {
      id: "2",
      text: "For sure, how i can help you today?",
      sender: "bot",
      time:"10:33am",
    },
    {
      id: "3",
      text: "Windows is broken, pc cant turn on",
      sender: "user",
      time:"10:35am",
    },
    {
      id: "3",
      text: "If your PC cant turn on, we can assist you tomorrow in the morning, we can reach to your location or you can visit us.",
      sender: "bot",
      time:"10:35am",
    },
  ];

  return (
    <StyledBox>
      <StyledChat>
        <Container >
          {messages?.map((msg) => (
            <ChatMessage key={msg.id} message={msg} />
          ))}
        </Container>
      </StyledChat>
      <Container layout="center" style={{ width: "425px", margin: "0 auto" }}>
        <StyledMsg>
          <Input layout="textType" />
        </StyledMsg>
        <ButtonSend>
          <IoMdSend />
        </ButtonSend>
      </Container>
    </StyledBox>
  );
}

export default ChatBox;
