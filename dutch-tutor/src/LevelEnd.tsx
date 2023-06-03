import { ReactElement } from "react";

interface IProps {
  handleGoToMenu: Function;
  score: number;
  maxScore: number;
  name: string;
}

export default function LevelEnd({
  handleGoToMenu,
  score,
  maxScore,
  name,
}: IProps): ReactElement {
  return (
    <div className="text-center bg-gradient-to-b from-slate-200 to-white h-5/6 flex flex-col justify-evenly -mt-5">
      <div className="">
        <div className=" text-5xl font-bold">Congratulations </div>
        <div className="text-2xl font-bold">You finished level</div>
        <div className="text-5xl font-bold">{name}</div>
        <div className="text-2xl font-bold">With Score</div>
        <div className="text-9xl font-bold">{maxScore - score}/{maxScore}</div>
      </div>

      <button
        onClick={() => handleGoToMenu()}
        className="p-2 bg-gradient-to-b from-slate-200 rounded-xl m-1 text-2xl font-bold border-slate-800 border shadow-md hover:to-slate-500 hover:text-white"
      >
        Go back to menu
      </button>
    </div>
  );
}
