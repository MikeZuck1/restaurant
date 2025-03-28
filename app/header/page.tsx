"use client";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // menu closed by default.
  // setisOpen change l'état au clique.

  return (
    <header className="bg-red-950">
      <div className="flex justify-between px-[2rem] py-[2rem]">
        {/* NAME AND LOGO  */} 
        <div className="flex gap-[.9rem] text-[#fff]">
          <div className="">Logo</div>
          <h1 className="">Restaurant le CSS</h1>
        </div>

        {/* BUTTON HAMBURGER  */}
        <button
          className="md:hidden text-[#fff] focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        {/* NAV LINK */}
        <nav className={`${isOpen ? "block" : "hidden"} md:flex`}>
          <ul className="flex flex-col md:flex-row absolute top-[5rem] left-0 w-full bg-red-900 md:static md:bg-transparent md:flex md:gap-[3rem] text-gray-400 p-4 md:p-0">
            <li>
              <a
                href="#"
                className="hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Accueil
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Notre Philosophie
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                La Carte
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-white"
                onClick={() => setIsOpen(false)}
              >
                Infos Pratiques
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
