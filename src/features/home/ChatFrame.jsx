import styled from "styled-components";
import { IoIosChatbubbles } from "react-icons/io";
import Modal from "../../ui/Modal";
import ChatBox from "../chatbot/ChatBox";

const StyledChat = styled.div`
  width: 95%;
  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;

  position: absolute;
  bottom: 15px;
  right: 35px;
`;

const ChatButton = styled.button`
  width: 70px;
  height: 70px;

  background-color: var(--color-blue);
  border: 5px solid var(--color-canary);
  border-radius: 50%;
  &:hover {
    box-shadow: 0px 0px 10px var(--color-canary);
  }

  cursor: pointer;

  & svg {
    height: 30px;
    width: 30px;
    color: var(--color-white-smoke);
  }
`;

function ChatFrame() {
  return (
    <StyledChat>
      <Modal>
        <Modal.Open>
          <ChatButton>
            <IoIosChatbubbles />
          </ChatButton>
        </Modal.Open>
        <Modal.Window>
          <ChatBox />
        </Modal.Window>
      </Modal>
    </StyledChat>
  );
}

export default ChatFrame;
