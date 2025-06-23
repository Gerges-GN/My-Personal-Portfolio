import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar() {
  return (
    <nav className="px-20 py-5 flex justify-between items-center font-semibold leading-6 bg-neut ral-100 ">
      <div>
        <h3 className="text-base font-bold hover:text-neutral-700 duration-200">
          Gerges.
        </h3>
      </div>
      <ul className="flex gap-3 h-[21px] *:border-transparent *:border-b-2 *:hover:border-neutral-700 *:hover:text-neutral-700 *:duration-200">
        <li>
          <a href="#about">About Me</a>
        </li>
        <li>
          <a href="#skills"> Skills</a>
        </li>
        <li>
          <a href="#projects"> Projects</a>
        </li>
        <li>
          <a href="#contact"> Contact Me</a>
        </li>
      </ul>
      <div>
        <Button url="https://drive.google.com/file/d/1vunOLBrPfvNWVdA3nZAX4t5mEr-VXtEp/view?usp=drivesdk">
          Resume
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="pl-2" />
        </Button>
      </div>
    </nav>
  );
}

export default Navbar;
