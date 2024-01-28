// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhp, faJs, faSass, faReact, faVuejs, faNode } from "@fortawesome/free-brands-svg-icons";

function Timeline() {
  // const [count, setCount] = useState(0);

  const slides = [faJs, faSass, faReact, faVuejs, faNode, faPhp];

  return (
    <section className="ticker">
      <div className="ticker__container">
        <div className="ticker__ticker">
          <ul className="ticker__slides">
            {slides.map((icon, i) => (
              <li className="ticker__slide" key={i}>
                <FontAwesomeIcon icon={icon} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Timeline;
