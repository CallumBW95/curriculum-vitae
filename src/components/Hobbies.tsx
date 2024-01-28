// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRaspberryPi } from "@fortawesome/free-brands-svg-icons";
import { faGamepad, faMotorcycle, faKeyboard, faMusic, faCamera } from "@fortawesome/free-solid-svg-icons";

function Hobbies() {
  // const [count, setCount] = useState(0);

  const slides = [
    {
      name: "Raspberry Pi",
      icon: faRaspberryPi,
    },
    {
      name: "PC Gaming",
      icon: faGamepad,
    },
    {
      name: "Biking",
      icon: faMotorcycle,
    },
    {
      name: "Custom Keyboards",
      icon: faKeyboard,
    },
    {
      name: "Making Music",
      icon: faMusic,
    },
    {
      name: "Photography",
      icon: faCamera,
    },
  ];

  return (
    <section className="hobbies">
      <div className="hobbies__container">
        <h2 className="hobbies__title">
          My <span>Hobbies</span>
        </h2>
        <div className="hobbies__hobbies">
          <ul className="hobbies__slides">
            {slides.map(({ name, icon }, i) => (
              <li className="hobbies__slide" key={i}>
                <FontAwesomeIcon icon={icon} />
                <h3 className="hobbies__slide-name">{name}</h3>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;
