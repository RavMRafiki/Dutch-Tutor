import { ReactElement } from "react";
import LevelChooseElement from "./LevelChooseElement";
interface IProps {
  levelNames: string[];
  handleChoose: Function;
}
export default function LevelChoose({
  levelNames,
  handleChoose,
}: IProps): ReactElement {
  return (
    <div className="w-full h-screen mt-5 dark:bg-emerald-950 dark:text-white h-">
      <div className="  lg:w-3/6 xl:w-1/3 mx-auto h-full -mt-5 pt-32">
        <ul className="flex flex-col justify-center text-center flex-shrink-0">
          {levelNames.map((el, idx) => (
            <li key={idx}>
              <LevelChooseElement
                name={el}
                index={idx}
                handleChoose={handleChoose}
                key={idx}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
