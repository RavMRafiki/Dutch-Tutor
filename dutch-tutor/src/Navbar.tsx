import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Navbar({ handleGameReset, handleChangeDarkMode }: any) {
  return (
    <nav className="fixed w-screen flex justify-between p-10 shadow-lg mb-5 bg-gradient-to-r from-green-200 to-teal-500 dark:from-green-700 dark:to-teal-950 dark:text-white">
      <button
        onClick={() => {
          handleGameReset();
          console.log("reset");
        }}
        className=" text-4xl font-extrabold"
      >
        Dutch Tutor
      </button>
      <button onClick={() => handleChangeDarkMode()}>
        <BsFillMoonStarsFill className="text-4xl" />
      </button>
    </nav>
  );
}
