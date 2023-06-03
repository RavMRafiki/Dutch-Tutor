import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar(handleGameReset: any) {
  return (
    <nav className=" flex justify-between p-10 shadow-lg mb-5 bg-gradient-to-r from-green-200 to-teal-500">
      <button
        onClick={() => {
          handleGameReset;
          console.log("reset");
        }}
        className=" text-4xl font-extrabold"
      >
        Dutch Tutor
      </button>
      <BsFillMoonStarsFill className="text-4xl" />
    </nav>
  );
}
