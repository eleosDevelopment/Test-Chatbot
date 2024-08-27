import PropTypes from "prop-types";
import styled from "styled-components";

const StyledMsg = styled.div`
  width: 420px;
`;

ChatMessage.propTypes = {
  message: PropTypes.object,
};
function ChatMessage({ message }) {
  return (
    <StyledMsg className={message.sender === "user" ? "rightSide right" : "leftSide"}>
      <p className={message.sender === "user" ? "rightText" : "leftText"}>
        {message.text}
      </p>
      <p className={message.sender === "user" ? "rightTime" : "leftTime"}>{message.time}</p>
    </StyledMsg>
  );
}

export default ChatMessage;
