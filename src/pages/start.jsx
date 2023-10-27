import React from "react";
import { Link } from "react-router-dom";
import { css, useTheme } from "@emotion/react";
import { LinkButton } from "../styles/style";

export default function Start() {
  const theme = useTheme();
  // 근데 이러면 export를 못함
  const text = css`
    text-align: left;
    p {
      margin: 0;
    }
    color: ${theme.palette.black};
    font-weight: 500;
    line-height: 1.75rem;
  `;

  const buttonContainer = css`
    display: flex;
    flex-wrap: wrap;

    button {
      background: rgb(239, 241, 243);
      border: none;
      border-radius: 9999px;
      padding: 8px 12px;
      font-size: 14px;
      color: ${theme.palette.black};
      font-weight: 500;
      &:hover {
        border: none;
      }
      margin-right: 8px;
      margin-bottom: 8px; // 흠.. 이거 설정 안하고 뭔가 flex-wrap 사용해서 띄우고싶다
    }
  `;

  const participantContainer = css`
    font-size: 16px;
    font-weight: 500;
    color: ${theme.palette.gray};
    span {
      font-weight: 600;
      color: ${theme.palette.blue};
    }
    margin-bottom: 12px;
  `;

  // const startButton = css`
  //   display: inline-block;
  //   border-radius: 9999px;
  //   padding: 12px 7rem;
  //   background: ${theme.palette.blue};
  //   color: ${theme.palette.white};
  //   font-weight: 600;
  //   // box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  //   margin-bottom: 20px;
  //   &:hover {
  //     color: ${theme.palette.white};
  //     background: rgb(29, 78, 216);
  //   }
  // `;

  const participant = 280449;
  let participantNumber = participant.toLocaleString("ko-KR");

  return (
    <div>
      <div css={[text, { marginBottom: "2.5rem" }]}>
        <p>꾸덕하고 탱글해서 자꾸만 먹고싶은 달콤한 푸딩🍮</p>
        <p>내 성격과 비슷한 푸딩은 어떤 맛일까?</p>
        <p>&nbsp;</p>
        <p>나와 잘 맞는 푸딩과 안 맞는 푸딩도 함께 알아보세요!</p>
      </div>
      {/* button section */}
      <section css={[buttonContainer, { marginBottom: "40px" }]}>
        <button># 심리테스트</button>
        <button># 유형테스트</button>
        <button># 성격테스트</button>
        <button># 디저트</button>
        <button># 푸딩</button>
      </section>
      <p css={participantContainer}>
        {/* span 태그는 줄바꿈이 되지 않는다. */}
        지금까지&nbsp;
        <span>{participantNumber}</span>
        명이 참여하였습니다.
      </p>

      {/* <Link to={"/page"} css={startButton}>
        시작하기
      </Link> */}
      <LinkButton
        theme={theme}
        buttonColor={"blue"}
        // backgroundColor={theme.palette.blue}
        // fontColor={theme.palette.white}
        link={"/page"}
      >
        시작하기
      </LinkButton>
      <div
        css={css({
          color: theme.palette.black,
          fontSize: "16px",
          fontWeight: "500",
        })}
      >
        친구와 함께 즐기기
      </div>
      <button>social media buttons</button>
    </div>
  );
}
