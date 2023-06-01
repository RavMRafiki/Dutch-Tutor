import React, { ReactElement } from "react";
import LevelChooseElement from "./LevelChooseElement";
interface IProps {
  levelNames: string[];
  handleChoose: Function;
}
export default function LevelChoose({ levelNames, handleChoose }: IProps): ReactElement {
  return (
    <div className=" lg:w-3/6 xl:w-1/3 mx-auto">
      <ul className="flex flex-col justify-center text-center flex-shrink-0">
        {levelNames.map((el, idx) => (
          <li>
            <LevelChooseElement name={el} index={idx} handleChoose={handleChoose}/>
          </li>
        ))}
      </ul>
    </div>
  );
}
