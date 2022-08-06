import styled from "styled-components";
import { motion } from "framer-motion";

export const LoaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: fixed;
  z-index: 2;

  width: 100%;
  height: 100vh;

  color: white;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const LoadingCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;

  border: 0.5rem solid #75757577;
  border-top: 0.5rem solid rgb(var(--primary-color));

  border-radius: 50%;

  background-color: transparent;
`;
