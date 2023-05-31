import React, { ReactElement } from "react";

export default function Word(props: any): ReactElement {
  return (
    <div>
      <button className=" p-2 bg-gradient-to-br from-slate-200 rounded-xl m-1 text-2xl font-bold border-slate-800 border shadow-md">
        {props.word}
      </button>
    </div>
  );
}
