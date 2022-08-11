import { ToastContainer } from "react-toastify";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  	:root {
      --grey-4: 18, 18, 20;
      --grey-3: 33, 37, 41;
      --grey-2: 52, 59, 65;
      --grey-1: 134, 142, 150;
      --grey-0: 248, 249, 250;
      --primary-color: 255, 87, 127;
      --primary-color-50: 255, 66, 127;

      // Toastify notifications styles
      --toastify-color-dark: rgb(var(--grey-2));
      --toastify-color-error: #e83f5b;
    }

    body {
      background-color: rgb(var(--grey-4));
    }

    * {
      font-family: 'Inter', sans-serif;
      box-sizing: border-box;
    }

    ::-webkit-scrollbar{
      width: 10px;
    }

    ::-webkit-scrollbar-track-piece{
      background-color: #FFF;
    }

    ::-webkit-scrollbar-thumb{
      background-color: #CBCBCB;
      outline-offset: -2px;
      border: .1px solid #B7B7B7;
    }

    ::-webkit-scrollbar-thumb:hover{
      background-color: #909090;
    }

    input, select {
      background-color: rgb(var(--grey-2));      
      color: rgb(var(--grey-0));

      padding: 0.8rem;
      
      border: none;
      border-radius: 4px;
      outline: none;

      font-size: 1rem;
      font-weight: 400;

      transition: all 0.5s;
    }

    input:focus {
      outline: 1px solid rgb(var(--grey-0)); 
    }

    input::placeholder {
      color: rgb(var(--grey-1));
      transition: all 0.5s;
    }

    input:focus::placeholder {
      color: rgb(var(--grey-0));
    }

    input:disabled {
      color: rgb(var(--grey-1));
    }

    label {
      font-size: 0.8rem;
      font-weight: 400;
    }

    small {
      color: rgb(var(--grey-1));
      font-weight: 600;
      font-size: 0.75rem;
    }
`;

export const StyledToastContainer = styled(ToastContainer).attrs({
  theme: "dark",
  pauseOnFocusLoss: false,
  autoClose: 3000,
})`
  font-weight: 600;
`;
