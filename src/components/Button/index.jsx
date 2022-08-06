import { DefaultButton } from "./styles";

export default function Button({ children, isDisabled, onClick, type }) {
  if (isDisabled === null) {
    isDisabled = false;
  }

  return (
    <DefaultButton isDisabled={isDisabled} onClick={onClick} type={type}>
      {children}
    </DefaultButton>
  );
}
