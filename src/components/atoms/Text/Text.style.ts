import styled from "styled-components";
import { EFontWeight, ETextVariants, TextProps } from "./Text";

interface StyledTextProps extends TextProps {
  fontWeight: EFontWeight;
}

const getFontSize = (type: ETextVariants): string => {
  switch (type) {
    case "header1":
      return "2rem";
    case "header2":
      return "1.5rem";
    case "header3":
      return "1.2rem";
    case "body":
      return "1rem";
    case "sub-body":
      return "0.9rem";
    default:
      return "1rem";
  }
};

const getFontWeight = (type: EFontWeight): string => {
  switch (type) {
    case "tiny":
      return "300";
    case "normal":
      return "400";
    case "semi-bold":
      return "600";
    case "bold":
      return "700";
    default:
      return "400";
  }
};

const StyledText = styled.p<StyledTextProps>`
  font-size: ${(props) => getFontSize(props.variant)};
  text-transform: ${(props) => (props.uppercase ? "uppercase" : "unset")};
  color: #333;
  font-weight: ${(props) => getFontWeight(props.fontWeight)};
  margin: 0;
  padding: 0;
`;

export default StyledText;
