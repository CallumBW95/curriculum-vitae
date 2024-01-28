import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faCodepen, faGithub } from "@fortawesome/free-brands-svg-icons";
import useOnScreen from "../hooks/useOnScreen";

function Header() {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const [isLoadedIn, setIsLoadedIn] = useState(false);
  let rootClass = "header";

  if (!isLoadedIn && isOnScreen) setIsLoadedIn(true);
  if (isLoadedIn) rootClass += " animate-in";

  const scrollTo = (target: string) => {
    const el = document.querySelector(target);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });
  };

  return (
    <section className={rootClass} ref={elementRef}>
      <div className="header__container container">
        <div className="header__content">
          <h1 className="header__title">
            Hi, I'm <span>Callum</span>,
          </h1>
          <h2 className="header__subtitle">
            a <span>{"<FullStackDeveloper />"}</span> with over a decade of commercial experience in the industry
            creating successful websites across a wide variety of sectors.
          </h2>
          <div className="header__buttons">
            <button className="header__button header__button--primary" onClick={() => scrollTo(".contact")}>
              Get in touch!
            </button>
            <a
              className="header__button header__button--social"
              href="https://www.linkedin.com/in/callum-bridgford-whittick/"
              target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a className="header__button header__button--social" href="https://github.com/CallumBW95" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="header__button header__button--social" href="https://codepen.io/callumbw95" target="_blank">
              <FontAwesomeIcon icon={faCodepen} />
            </a>
          </div>
        </div>
        <div className="header__image">
          <img src="/header.jpg" />
        </div>
      </div>
      <div className="header__background">
        <img src="/header-background.jpg" />
      </div>
    </section>
  );
}

export default Header;
