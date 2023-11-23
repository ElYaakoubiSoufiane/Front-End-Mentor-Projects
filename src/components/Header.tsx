import { useEffect, useRef, useState } from "react";
import logo from "../assets/images/logo.svg";
import React from "react";
import { log } from "console";

export default function Header() {
  const headerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
       if (headerRef.current) {
         if (window.scrollY > 100) {
           headerRef.current.style.background = "#0c1524";
           headerRef.current.style.padding = "20px 0";
         } else {
           headerRef.current.style.background = "transparent";
           headerRef.current.style.padding = "60px 0";
         }
       }
    };
   
    window.addEventListener("scroll", handleScroll);
   
    return () => {
       window.removeEventListener("scroll", handleScroll);
    };
   }, []);
  const [links, setLinks] = useState(["Features", "Team", "Signin"]);

  return (
    <header
      ref={headerRef}
      className="pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200"
    >
      <div className="container mx-auto flex justify-between items-center gap-[30px]  flex-col  sm:gap-0 sm:flex-row px-[30px]">
        <a href="/">
          <img src={logo} alt="logo-img" />
        </a>
        <nav>
          <ul className="flex items-center gap-[50px] ">
            {links.map((el) => (
              <li key={el}>
                <a
                  href={`/${el.toLowerCase()}`}
                  className="text-white opacity-[0.9] hover:opacity-[1] hover:underline transition-opacity duration-200"
                >
                  {el}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
