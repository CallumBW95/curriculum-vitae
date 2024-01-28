import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Navigation() {
  const [navToggle, setNavToggle] = useState(false);
  const links = [
    {
      target: ".about",
      text: "About",
    },
    {
      target: ".timeline",
      text: "History",
    },
    {
      target: ".portfolio",
      text: "Portfolio",
    },
    {
      target: ".contact",
      text: "Get in touch",
    },
  ];

  const scrollTo = (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
    setNavToggle(false);
  };
  const toggleNav = () => setNavToggle(!navToggle);

  return (
    <section className="navigation">
      <div className="navigation__container container">
        <button className="navigation__logo" onClick={() => scrollTo(".header")}>
          CallumBW95
        </button>
        <button className="navigation__toggle" onClick={toggleNav}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav className={`navigation__nav ${navToggle ? " navigation__nav--active" : ""}`}>
          <ul>
            {links.map(({ target, text }, i) => (
              <li key={i}>
                <button onClick={() => scrollTo(target)}>{text}</button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  );
}

export default Navigation;
