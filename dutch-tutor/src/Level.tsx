import React, { ReactElement, ReactNode, useEffect } from "react";
import { useState } from "react";
import Word from "./Word";

interface question {
  typeofquest: string;
  question: string;
  sentence: string;
  words: string[];
  correct: string[];
}
export default function Level(props: any): ReactElement {
  const questions: question[] = [
    {
      typeofquest: "translate",
      question: "Translate sentence to english",
      sentence: "Ik heb een koe",
      words: ["I", "have", "am", "tomato", "cow", "a"],
      correct: ["I", "have", "a", "cow"],
    },
    {
      typeofquest: "translate back",
      question: "Translate sentence to dutch",
      sentence: "They throw cabbage",
      words: ["Ze", "ga", "aardappel", "gooien", "kool"],
      correct: ["Ze", "gooien", "kool"],
    },
    {
      typeofquest: "translate back",
      question: "Translate sentence to english",
      sentence: "Ik ben geen tomaat",
      words: ["friend", "I", "am", "coconut", "a", "tomato", "not"],
      correct: ["I", "am", "not", "a", "tomato"],
    },
  ];
  let [questionIndex, setQuestionIndex] = useState<number>(0);
  let [answerList, setAnswerList] = useState<string[]>([]);
  let [wordsToChoseList, setWordsToChoseList] = useState<string[]>(
    questions[questionIndex].words
  );

  function handleAdd(word: string, index: number): void {
    setAnswerList([...answerList, word]);
    setWordsToChoseList(wordsToChoseList.filter((w, idx) => idx !== index));
  }
  function handleRemove(word: string, index: number): void {
    setAnswerList(answerList.filter((w, idx) => idx !== index));
    setWordsToChoseList([...wordsToChoseList, word]);
  }
  useEffect(() => {
    if (questions[questionIndex].correct.toString() === answerList.toString()) {
      setWordsToChoseList(() => questions[questionIndex + 1].words);
      setAnswerList(() => []);
      setQuestionIndex((previous) => previous + 1);
    }

    return () => {};
  }, [answerList]);

  return (
    <div className=" justify-evenly flex items-center flex-col h-5/6">
      <div className="m-2 mt-10">{questions[questionIndex].question}</div>
      <div className="text-3xl m-10">{questions[questionIndex].sentence}</div>
      <div className="flex flex-wrap border w-10/12 h-52 shadow-sm m-5">
        {answerList.map(
          (el: string, index: number): ReactElement => (
            <Word
              key={index}
              word={el}
              index={index}
              handleClick={handleRemove}
            />
          )
        )}
      </div>
      <div className="flex flex-wrap">
        {wordsToChoseList.map(
          (el: string, index: number): ReactElement => (
            <Word key={index} word={el} index={index} handleClick={handleAdd} />
          )
        )}
      </div>
    </div>
  );
}
