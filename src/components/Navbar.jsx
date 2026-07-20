import { useState, useEffect, useRef } from "react";
import { navLinks } from "../data/portfolioData";
import { IoEllipsisHorizontal, IoClose } from "react-icons/io5";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  
  const navRef = useRef(null); 

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && navRef.current && !navRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [menuOpen]); 

  return (
    <nav ref={navRef} className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-content">

        <a href="#home" className="logo">Ameer's <span>Portfolio</span><span className="wave">👋 </span><span> </span></a>
        
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navLinks.map(link => (
            <a 
              key={link} 
              href={`#${link.toLowerCase()}`}
              onClick={() => setMenuOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>

        <button 
          className="hamburger" 
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
          style={{ 
            background: 'transparent', 
            border: 'none', 
            cursor: 'pointer', 
            alignItems: 'center', 
            justifyContent: 'center',
            position: 'relative', 
            zIndex: 9999 
          }}
        >
          {menuOpen ? (
            <IoClose size={32} />
          ) : (
            <IoEllipsisHorizontal size={32} />
          )}
        </button>
      </div>
    </nav>
  );
}