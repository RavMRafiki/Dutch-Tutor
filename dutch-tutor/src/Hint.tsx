import {ReactElement} from "react";

interface IProps{
    answer: string;

}
export default function Hint({answer}:IProps):ReactElement {
  return (
    <div className=" absolute text-center text-xl text-red-500 mr-9">
      {answer}
    </div>
  )
}
