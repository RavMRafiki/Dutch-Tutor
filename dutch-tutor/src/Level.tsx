import React, { ReactElement, ReactNode } from "react";
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
  const questions: question[]= [
    {
      typeofquest: "translate",
      question: "Translate sentence to english",
      sentence: "Ik heb een koe",
      words: ["I", "have", "am", "tomato", "cow", "a"],
      correct: ["I", "have", "a", "cow"],
    },
  ];
  let [questionIndex, setQuestionIndex] = useState(0);

  return (
    <div className=" justify-center flex items-center flex-col min-h-full w-screen">
      <div className="m-2">{questions[questionIndex].question}</div>
      <div className="text-3xl">{questions[questionIndex].sentence}</div>
      <div className="flex flex-wrap border w-10/12 h-40 shadow-sm"></div>
      <div className="flex flex-wrap">
        {questions[questionIndex].words.map((el:string):ReactElement => (
          <Word word={el} />
        ))}
      </div>
    </div>
  );
}
