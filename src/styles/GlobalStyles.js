import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root{
    /*** MAIN COLORS ***/
    --color-red: #D91A21;
    --color-blue: #14213D;
    --color-canary: #FFED02;
    --color-white-smoke:#f5f5f5;
    --color-skyblue: #3a86ff;
    --color-bc-white-50: rgb(245, 245, 245, 0.3);

    /*** GREY COLORS ***/
    --color-grey-50: #f9fafb;
    --color-grey-100: #f3f4f6;
    --color-grey-200: #e5e7eb;
    --color-grey-300: #d1d5db;
    --color-grey-400: #9ca3af;
    --color-grey-500: #6b7280;
    --color-grey-600: #4b5563;
    --color-grey-700: #374151;
    --color-grey-800: #1f2937;
    --color-grey-900: #111827;
  }

  body {
    font-family: "Inter", sans-serif;
    color: var(--color-blue);
    background-color: var(--color-white-smoke);

    transition: color 0.3s, background-color 0.3s;
    min-height: 100vh;
    line-height: 1.5;
    font-size: 1rem;
    width: 95%;
    margin:  0 auto;
    padding: 5px;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;

    overflow: hidden;
  }
  .rightSide {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;

    width: 400px;
    margin: 0 auto 5px;
    padding: 5px;
    min-height: 35px;

    color: var(--color-blue);
  }
  .leftSide {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;

    width: 400px;
    margin: 0 auto 5px;
    padding: 5px;
    min-height: 35px;

    color: var(--color-skyblue);
  }
  .rightText {
    margin: 0px;
    padding: 5px 10px;
    max-width: 75%;
    text-align: right;

    color: var(--color-white-smoke);
    background-color: var(--color-grey-500);
    border: 1px solid var(--color-grey-500);
    border-radius: 1em;
  }

  .leftText {
    margin: 0px;
    padding: 5px 10px;
    max-width: 75%;
    text-align: left;

    color: var(--color-white-smoke);
    background-color: var(--color-blue);
    border: 1px solid var(--color-blue);
    border-radius: 1em;
  }
  .rightTime {
    width: 100%;
    margin: 0px;
    font-size: 0.7rem;
    text-align: right;
  }
  .leftTime {
    width: 100%;
    margin: 0px;
    font-size: 0.7rem;
    text-align: left;
  }
`;

export default GlobalStyles;
