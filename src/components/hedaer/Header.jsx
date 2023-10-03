import { useState } from "react";
import "./header.css";

const Header = () => {
    window.addEventListener("scroll", function() {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    })

    const [Toggle, setToggle] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");


    return (
        <>
            <header className="header">
                <nav className="nav container">
                    <a href="index.html" className="nav-logo">
                        farah
                    </a>
                
                    <div className={ Toggle ? "nav-menu show-menu" : "nav-menu" }>
                        <ul className="nav-list">
                            <li className="nav-item">
                                <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === "home" ? "nav-link active-link" : "nav-link"}>
                                    <i className="uil uil-estate nav-icon"></i> Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#about" className="nav-link">
                                    <i className="uil uil-user nav-icon"></i> About 
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#skills" className="nav-link">
                                    <i className="uil uil-file-alt nav-icon"></i> Skills
                                </a>
                            </li>
                            {/* <li className="nav-item">
                                <a href="#services" className="nav-link">
                                    <i className="uil uil-briefcase-alt nav-icon"></i> Services
                                </a>
                            </li> */}
                            <li className="nav-item">
                                <a href="#portfolio" className="nav-link">
                                    <i className="uil uil-scenery nav-icon"></i> Portfolio
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#contact" className="nav-link">
                                    <i className="uil uil-message nav-icon"></i> Contact
                                </a>
                            </li>
                        </ul>

                        <i className="uil uil-times nav-close" onClick={ () => setToggle(!Toggle) }></i>
                    </div>

                    <div className="nav-toggle" onClick={ () => setToggle(!Toggle) }>
                        <i className="uil uil-apps "></i>
                    </div>
                </nav>
            </header>
        </>
    );
}

export default Header;
