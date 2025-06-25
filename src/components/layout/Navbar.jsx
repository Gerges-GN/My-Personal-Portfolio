import {
  faArrowUpRightFromSquare,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="max-w-screen-xl mx-auto px-4 md:px-10 lg:px-20 py-5 relative flex justify-between items-center font-semibold leading-6">
      <div>
        <h3 className="text-lg font-bold hover:text-neutral-700 select-none">
          Gerges.
        </h3>
      </div>

      <ul className="hidden md:flex gap-3 h-[21px] *:hover:-mx-1 *:border-transparent *:border-b-2 *:hover:border-neutral-700 *:hover:text-neutral-700 *:">
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
      <div className="hidden md:block">
        <Button url="https://drive.google.com/file/d/1vunOLBrPfvNWVdA3nZAX4t5mEr-VXtEp/view?usp=drivesdk">
          Resume
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="pl-2" />
        </Button>
      </div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className=" block md:hidden text-2xl"
      >
        <FontAwesomeIcon icon={faBars} className="" />
      </button>

      <div
        className={`absolute top-[64px] left-0 w-full h-dvh overflow-hidden bg-[#aaa7] backdrop-blur-xs md:hidden transition-all duration-75 ease-in-out touch-none ${
          isOpen ? " opacity-100 z-40" : " opacity-0 -z-10 delay-150 "
        }`}
        onClick={() => setIsOpen(false)}
      >
        <ul
          className={`*:p-2 *:*:mx-auto text-center overflow-hidden bg-[#fff] font-medium md:hidden transition-all  ease-in-out ${
            isOpen
              ? "max-h-[300px] pb- py-5 z-50 delay-150 "
              : "max-h-0 py-0 -z-10"
          }`}
        >
          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              <p>About Me</p> 
            </a>
          </li>
          <li>
            <a href="#skills" onClick={() => setIsOpen(false)}>
              <p>Skills</p> 
            </a>
          </li>
          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              <p>Projects</p> 
            </a>
          </li>
          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              <p>Contact Me</p> 
            </a>
          </li>
          <li>
            <Button url="https://drive.google.com/file/d/1vunOLBrPfvNWVdA3nZAX4t5mEr-VXtEp/view?usp=drivesdk">
              <p>Resume</p> 
              <FontAwesomeIcon
                icon={faArrowUpRightFromSquare}
                className="pl-2"
              />
            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
