import React from "react";
import { Outlet } from "react-router-dom";
// import facepaint from "facepaint";
import { css } from "@emotion/react";
import { ThemeProvider } from "@emotion/react";
import theme from "./styles/theme";
export default function Root() {
  const breakpoints = [0, 640, 1140];

  const mq = breakpoints.map((bp) => `@media (min-width: ${bp}px)`);
  // 0, 640부터 폰트 18px
  // 1140부터 폰트 22px

  const container = css`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    // background: yellow;
  `;

  const innerContainer = css`
    width: 80%;
    margin-top: 37%;
    text-align: center;
  `;
  return (
    <ThemeProvider theme={theme}>
      <div css={css(container)}>
        <div
          css={[
            innerContainer,
            {
              // [[mq[0], mq[1]]]: {
              //   fontSize: "18px",
              // },
              [mq[0]]: { fontSize: "18px" },
              [mq[1]]: {
                fontSize: "22px",
              },
            },
          ]}
        >
          <Outlet />
        </div>
      </div>
    </ThemeProvider>
  );
}
