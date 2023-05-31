import React, { ReactElement } from "react";

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
  ...props
}: IProps): ReactElement {
  return (
    <div>
      <button
        onClick={()=> handleClick(word, index)}
        className=" p-2 bg-gradient-to-br from-slate-200 rounded-xl m-1 text-2xl font-bold border-slate-800 border shadow-md"
      >
        {word}
      </button>
    </div>
  );
}
