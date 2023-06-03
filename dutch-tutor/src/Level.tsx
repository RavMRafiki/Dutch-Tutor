import { ReactElement, useEffect} from "react";
import { useState } from "react";
import Word from "./Word";
import Hint from "./Hint";

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
  quizname: string;
}
export default function Level({
  handleLevelEnd,
  currentQuiz,
  quizname,
}: Iprops): ReactElement {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [answerList, setAnswerList] = useState<string[]>([]);
  const [wordsToChoseList, setWordsToChoseList] = useState<string[]>(
    currentQuiz.questions[questionIndex].words
  );
  const [usedHint, setUsedHint] = useState<boolean>(false);
  const [showHint, setShowHint] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);

  function handleAdd(word: string, index: number): void {
    setAnswerList([...answerList, word]);
    setWordsToChoseList(wordsToChoseList.filter((_w, idx) => idx !== index));
  }
  function handleRemove(word: string, index: number): void {
    setAnswerList(answerList.filter((_w, idx) => idx !== index));
    setWordsToChoseList([...wordsToChoseList, word]);
  }
  useEffect(() => {
    if (
      currentQuiz.questions[questionIndex].correct.toString() ===
      answerList.toString()
    ) {
      if (questionIndex === currentQuiz.questions.length - 1) {
        handleLevelEnd(
          score + Number(usedHint),
          currentQuiz.questions.length,
          quizname
        );
      }
      setWordsToChoseList(() => currentQuiz.questions[questionIndex + 1].words);
      setAnswerList(() => []);
      setQuestionIndex((previous) => previous + 1);
      if (usedHint) setScore((prev) => prev + 1);
      setUsedHint(false);
      setShowHint(false);
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
        {showHint && (
          <Hint
            answer={currentQuiz.questions[questionIndex].correct.join(" ")}
          />
        )}
      </div>
      <div className="flex flex-wrap border w-10/12 h-52 shadow-sm m-5 rounded-xl">
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
      <button
        onClick={() => {
          setUsedHint(true);
          setShowHint((prev) => !prev);
        }}
        className="w-10/12 p-2 bg-gradient-to-r from-green-200 to-teal-500 rounded-xl m-1 text-2xl font-bold border-slate-800 border shadow-md hover:text-white"
      >
        Give Up
      </button>
    </div>
  );
}
