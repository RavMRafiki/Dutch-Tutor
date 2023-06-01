import { ReactElement } from "react";

interface IProps {
  name: string;
  index: number;
  handleChoose: Function;
}
export default function LevelChooseElement({
  name,
  index,
  handleChoose,
}: IProps): ReactElement {
  return (
    <div className="h-20 p-2 bg-gradient-to-b from-slate-200 rounded-xl m-1 text-2xl font-bold border-slate-800 border shadow-md hover:to-slate-500 hover:text-white">
      <button onClick={() => handleChoose(index)} className=" w-full h-full">
        {name}
      </button>
    </div>
  );
}
