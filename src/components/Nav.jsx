import { useState } from "react";
import "../style/Nav.css";

const Nav = () => {
  const [visible, setVisible] = useState(false);
  const changeVisibilty = () => {
    visible ? setVisible(false) : setVisible(true);
  };
  return (
    <>
      <i
        onClick={changeVisibilty}
        className="fa-solid fa-bars fixed w-10 h-10 rounded-full top-4 right-4 md:top-8 md:right-8 bg-purple-950 text-xl text-white flex justify-center items-center"
      ></i>
      {visible ? (
        <nav className="rounded-full flex justify-around items-center fixed bottom-5">
          <a href="#home" className="grid rounded-full no-underline">
            <i className="fa-solid fa-house"></i>
          </a>
          <a href="#skills" className="grid rounded-full no-underline">
            <i className="fa-solid fa-star"></i>
          </a>
          <a href="#projects" className="grid rounded-full no-underline">
            <i className="fa-sharp fa-solid fa-gear"></i>
          </a>
          <a href="#contact" className="grid rounded-full no-underline">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </nav>
      ) : null}
    </>
  );
};

export default Nav;
