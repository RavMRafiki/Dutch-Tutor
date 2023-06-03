import { ReactElement } from "react";

interface IProps {
  key: number;
  word: string;
  index: number;
  handleClick: Function;
}
export default function Word({
  word,
  index,
  handleClick,
}: IProps): ReactElement {
  return (
    <div>
      <button
        onClick={() => handleClick(word, index)}
        className=" p-2 bg-gradient-to-b from-slate-200 rounded-xl m-1 text-2xl font-bold border-slate-800 border shadow-md hover:to-slate-500 hover:text-white dark:border-white dark:to-teal-900 dark:from-green-900 dark:hover:to-green-600"
      >
        {word}
      </button>
    </div>
  );
}
