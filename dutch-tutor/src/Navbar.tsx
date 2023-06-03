import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar(handleGameReset: any) {
  return (
    <nav className=" flex justify-between p-10 shadow-lg mb-5">
      <button
        onClick={() => {
          handleGameReset;
          console.log("reset")
        }}
        className=" text-4xl"
      >
        Dutch Tutor
      </button>
      <BsFillMoonStarsFill className="text-4xl" />
    </nav>
  );
}
