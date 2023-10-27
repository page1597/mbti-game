import { css } from "@emotion/react";
import { Link } from "react-router-dom";
export function LinkButton({ children, theme, buttonColor, link }) {
  //   let color =
  //     backgroundColor == theme.palette.blue
  //       ? theme.palette.blue
  //       : theme.palette.pink;
  //   console.log(color);
  let color = buttonColor == "blue" ? theme.palette.blue : theme.palette.pink;
  let opacity7Color =
    buttonColor == "blue" ? theme.palette.blueOp70 : theme.palette.pinkOp70;
  const buttonStyle = css`
    display: inline-block;
    border-radius: 9999px;
    padding: 12px 7rem;
    background: ${opacity7Color};
    color: ${theme.palette.white};
    font-weight: 600;
    // box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    &:hover {
      color: ${theme.palette.white};
      background: ${color};
    }
  `;
  return (
    <Link to={link} css={buttonStyle}>
      {children}
    </Link>
  );
}
