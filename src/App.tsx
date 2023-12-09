import "react";
import { NavLink, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import Blog from "./Pages/Blog/Blog";
export default function App() {
  function BurgerClick () {
    let nav = document.querySelector("nav");
    nav?.classList.toggle("active");
  }
  return (
    <>
      <header>
        <NavLink to="/" className="logo">Your Logo</NavLink>
        <nav>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="about">About</NavLink>
            </li>
            <li>
              <NavLink to="contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="blog">Blog</NavLink>
            </li>
          </ul>
        </nav>
        <div className="burger" onClick={BurgerClick}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/blog" element={<Blog/>}/>
        </Routes>
      </main>
    </>
  )
}
