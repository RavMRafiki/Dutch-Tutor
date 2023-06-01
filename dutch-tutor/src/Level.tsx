import React, { ReactElement, ReactNode, useEffect } from "react";
import { useState } from "react";
import Word from "./Word";

interface IQuestion {
  typeofquest: string;
  question: string;
  sentence: string;
  words: string[];
  correct: string[];
}
interface IQuiz {
  quizname: string;
  questions: IQuestion[];
}
interface Iprops {
  handleLevelEnd: Function;
  currentQuiz: IQuiz;
}
export default function Level({ handleLevelEnd, currentQuiz }: Iprops): ReactElement {
  let [questionIndex, setQuestionIndex] = useState<number>(0);
  let [answerList, setAnswerList] = useState<string[]>([]);
  let [wordsToChoseList, setWordsToChoseList] = useState<string[]>(
    currentQuiz.questions[questionIndex].words
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
    if (
      currentQuiz.questions[questionIndex].correct.toString() ===
      answerList.toString()
    ) {
      if (questionIndex === currentQuiz.questions.length - 1) {
        handleLevelEnd();
      }
      setWordsToChoseList(() => currentQuiz.questions[questionIndex + 1].words);
      setAnswerList(() => []);
      setQuestionIndex((previous) => previous + 1);
    }

    return () => {};
  }, [answerList]);

  return (
    <div className=" justify-evenly flex items-center flex-col h-5/6">
      <div className="m-2 mt-10">
        {currentQuiz.questions[questionIndex].question}
      </div>
      <div className="text-3xl m-10">
        {currentQuiz.questions[questionIndex].sentence}
      </div>
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
