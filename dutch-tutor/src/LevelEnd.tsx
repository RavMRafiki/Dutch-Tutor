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
        <div className=" text-transparent text-4xl md:text-9xl bg-clip-text font-bold m-5 bg-gradient-to-r from-green-200 to-teal-500 pb-4">
          Congratulations{" "}
        </div>
        <div className="text-2xl font-bold">You finished level</div>
        <div className="text-5xl font-bold m-3">{name}</div>
        <div className="text-2xl font-bold">With Score</div>
        {score / maxScore > 0.75 ? (
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-700">
            {maxScore - score}/{maxScore}
          </div>
        ) : score / maxScore < 0.25 ? (
          <div className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-green-500 to-green-700">
            {maxScore - score}/{maxScore}
          </div>
        ) : (
          <div className="text-9xl font-bold">
            {maxScore - score}/{maxScore}
          </div>
        )}
      </div>

      <button
        onClick={() => handleGoToMenu()}
        className="p-2 bg-gradient-to-r from-green-200 to-teal-500 rounded-xl m-1 text-2xl font-bold border-slate-800 border shadow-md hover:text-white"
      >
        Go back to menu
      </button>
    </div>
  );
}
