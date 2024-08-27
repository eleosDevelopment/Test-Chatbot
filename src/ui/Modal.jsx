import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import styled from "styled-components";
import PropTypes from "prop-types";
import { useOutsideClick } from "../utils/useOutsideClick";

const StyledModal = styled.div`
  padding: 10px;

  position: absolute;
  top: 45%;
  left: 82.2%;
  transform: translate(-50%, -50%);
  background-color: var(--color-white-smoke);
  border: 2px solid var(--color-canary);
  border-radius: 10px;
  box-shadow: 0px 0px 10px var(--color-canary);
  transition: all 0.5s;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  transition: all 0.5s;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 5px;
  background-color: var(--color-grey-200);
  border: 2px solid var(--color-grey-500);
  border-radius: 20px;

  transform: translateX(0.8rem);
  transition: all 0.7s;
  position: absolute;
  top: 1.2rem;
  right: 1.9rem;

  color: var(--color-grey-500);
  font-size: 1.2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    background-color: var(--color-grey-100);
    border-radius: 20px;
    color: var(--color-grey-800);
  }

  & svg {
    width: 1.5rem;
    height: 1.5rem;
    color: var(--color-grey-500);
  }

  &:hover svg {
    color: var(--color-grey-800);
  }
`;

const ModalContext = createContext();

Modal.propTypes = {
  children: PropTypes.node,
}

function Modal({ children }) {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens: opensWindowName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(opensWindowName) });
}

Window.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  closeModal: PropTypes.func,
}

function Window({ children, name }) {
  const { openName, close } = useContext(ModalContext);
  const ref = useOutsideClick(close);
  if (name !== openName) return null;

  return createPortal(
    <Overlay>
      <StyledModal ref={ref}>
        <Button onClick={close}>
          <HiXMark />
        </Button>

        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </StyledModal>
    </Overlay>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;