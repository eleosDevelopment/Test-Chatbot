import styled, { css } from "styled-components";

const layouts = {
  textType: css`
    border: none;
    background-color: transparent;
    width: 95%;

    padding: 10px;
    font-size: 1.1rem;
    letter-spacing: 0.2rem;

    &:focus {
      outline-style: none;
    }
  `,

  findType: css`
    border: 1px solid var(--color-yellow);
    border-radius: 25px;
    box-shadow: var(--shadow-md);
    background-color: transparent;

    width: 90%;
    margin: 20px auto;
    padding: 10px;

    font-size: 1rem;
    font-weight: 600;
    text-align: center;
  `,
};

const Input = styled.input`
  opacity: 0.9;
  color: inherit;
  width: ${(props) => props.width};

  ${(props) => layouts[props.layout]}
`;

Input.defaultProps = {
  layout: "textType",
};

export default Input;