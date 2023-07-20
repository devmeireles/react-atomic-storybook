import styled from "styled-components";
import { ButtonProps, EButtonVariants } from "./Button";

const getBackgroundcolor = (type: EButtonVariants): string => {
  switch (type) {
    case "primary":
      return "#007bff";
    case "secondary":
      return "#28a745";
    case "danger":
      return "#dc3545";
    case "warning":
      return "#ffc107";
    default:
      return "#007bff";
  }
};

export const StyledButton = styled.button<ButtonProps>`
  padding: 10px 20px;
  font-size: 16px;
  background-color: ${(props) => getBackgroundcolor(props.variant)};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
