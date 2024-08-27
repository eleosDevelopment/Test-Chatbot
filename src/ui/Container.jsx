import { styled, css } from "styled-components";

const layouts = {
  center: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  `,
  left: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-start;
  `,
  right: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
  `,
  spaceb: css`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  `,
  spaceBetStart: css`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  `,
  column: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  `,
  flexEnd: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin: 0 auto;
  `,
  flexStart: css`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin: 0 auto;
  `,
  flexStartCenter: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin: 0 auto;
  `,
};

const Container = styled.section`
  ${(props) => layouts[props.layout]}
`;

export default Container;