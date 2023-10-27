import React, { useState } from "react";
import data from "../questions.json";
import results from "../results.json";
import { css, keyframes, useTheme } from "@emotion/react";
import { LinkButton } from "../styles/style";

function LoadingSpinner() {
  const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
    `;
  const loader = css`
    border: 16px solid #f3f3f3;
    border-top: 16px solid #3498db;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite;
  `;
  return <div css={loader} />;
}

export default function Page() {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);

  const progressingBar = css`
    width: 100%;
    height: 20px;
    background: ${theme.palette.skyblue};
    border-radius: 20px;
    clip-path: content-box;
  `;
  const progress = css`
    height: 100%;
    background: ${theme.palette.blue};
    transition-duration: 0.5s;
  `;
  const questionContainer = css`
    margin-top: 40px;
  `;
  const question = css`
    margin: 0;
    color: ${theme.palette.black};
    white-space: pre-line;
    font-size: 1.25rem;
    line-height: 1.75rem;
  `;

  const answerContainer = css`
    margin-top: 40px;
    white-space: pre-line;
    display: flex;
    flex-direction: column;

    button {
      font-size: 1rem;
      line-height: 1.5rem;
      color: ${theme.palette.gray};
      background: none;
      border-color: ${theme.palette.lightgray};
      border-radius: 12px;
      margin: 0;
      margin-bottom: 16px;

      &:hover {
        color: ${theme.palette.blue};
        border-color: ${theme.palette.blue};
      }
    }
  `;

  const buttonContainer = css`
    margin-top: 40px;
  `;

  const [count, setCount] = useState(0);
  const [mbti, setMbti] = useState([
    { e: 0, i: 0 },
    { s: 0, n: 0 },
    { t: 0, f: 0 },
    { j: 0, p: 0 },
  ]);
  let result = "";

  const onClick = (event) => {
    setCount((count) => count + 1);

    let mbtiSet = {};
    let index = 0;
    mbti.map((value) =>
      Object.keys(value).map((el) => {
        if (el === event.target.value) {
          mbtiSet = { ...value, [el]: value[el] + 1 };
          index = mbti.indexOf(value);
        }
      })
    );
    var temp = mbti;
    temp[index] = mbtiSet;
    setMbti(temp);

    if (count == 10) {
      setTimeout(() => {
        if (!loading) {
          setLoading(true); // true
        }
      }, 3000);
    }
  };

  return (
    <div>
      {/* {count + 1} */}
      {count < 11 ? (
        <>
          <div css={progressingBar}>
            <div css={[progress, { width: `${(100 * (count + 1)) / 11}%` }]} />
          </div>
          <div css={questionContainer}>
            <h2 css={question}>{data.questions[count].question}</h2>
          </div>
          <div css={answerContainer}>
            {Object.keys(data.questions[count].answer).map((value) => (
              <button
                key={value}
                value={value}
                onClick={(event) => onClick(event)}
              >
                {data.questions[count].answer[value]}
              </button>
            ))}
          </div>
        </>
      ) : loading ? (
        <div>
          <div style={{ display: "none" }}>
            {mbti.map((value) =>
              Object.values(value)[0] > Object.values(value)[1]
                ? (result += Object.keys(value)[0])
                : (result += Object.keys(value)[1])
            )}
          </div>
          <div>
            나의 푸딩: ({result})
            {results.results.map(
              (element) =>
                element.mbti === result && (
                  <div key={element.mbti}>
                    <div>{element.pudding}</div>
                    <div>{element.description}</div>
                    <div>
                      잘 맞는 푸딩:
                      {element.goodwith[0]}, {element.goodwith[1]}
                    </div>
                    <div>
                      안 맞는 푸딩:
                      {element.badwith[0]}, {element.badwith[1]}
                    </div>
                    <div css={buttonContainer}>
                      <LinkButton theme={theme} buttonColor={"pink"}>
                        전체결과
                      </LinkButton>
                      <LinkButton theme={theme} buttonColor={"blue"} link={"/"}>
                        다시하기
                      </LinkButton>
                    </div>
                    <div>친구에게 공유하기</div>

                    {/* <div
                      css={css`
                        animation: ${bounce} 1s ease infinite;
                      `}
                    >
                      some bouncing text!
                    </div> */}
                  </div>
                )
            )}
          </div>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </div>
  );
}
