import { useRef, useState } from "react";
import useOnScreen from "../hooks/UseOnScreen";

function About() {
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const [isLoadedIn, setIsLoadedIn] = useState(false);
  let rootClass = "about";

  if (!isLoadedIn && isOnScreen) setIsLoadedIn(true);
  if (isLoadedIn) rootClass += " animate-in";

  return (
    <section className={rootClass} ref={elementRef}>
      <div className="about__container">
        <div className="about__image">
          <img src="/about.jpg" />
        </div>
        <div className="about__content">
          <h2 className="about__content-title">
            About <span>Myself</span>
          </h2>
          <p className="about__content-text">
            Innovative, Creative and Enthusiastic, I have spent the last decade working in Website Development and
            Design for various companies and friends. I pride myself on the ability to pick up and learn new programming
            languages and frameworks quickly and efficiently. In part this is down to the fact that in my spare time I
            schedule in regular self development to learn new, and improve on existing skills. That way I can always
            make sure that I am up to date with the latest technologies.
          </p>
        </div>
      </div>
      <div className="about__background">
        <img src="/about-background.jpg" />
      </div>
    </section>
  );
}

export default About;
