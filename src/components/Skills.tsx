import { useRef, useState } from "react";
import { SkillInterface, SoftSkillInterface } from "../data/skills";
import useOnScreen from "../hooks/useOnScreen";

interface Props {
  skillData: SkillInterface[];
  softSkillData: SoftSkillInterface[];
}

function Skills(props: Props) {
  const { skillData, softSkillData } = props;
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const [isLoadedIn, setIsLoadedIn] = useState(false);
  let rootClass = "skills";

  if (!isLoadedIn && isOnScreen) setIsLoadedIn(true);
  if (isLoadedIn) rootClass += " animate-in";

  return (
    <section className={rootClass} ref={elementRef}>
      <div className="skills__container">
        <h2 className="skills__title">
          My <span>Skills</span>
        </h2>
        {Array.isArray(skillData) && (
          <ul className="skills__skills">
            {skillData.map(({ name, value }) => (
              <li className="skills__skill skills__skill--hard skill">
                <h3 className="skill__name">{name}</h3>
                <div className="skill__bar">
                  <div className="skill__bar-value" style={{ width: `${value * 10}%` }}></div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <h2 className="skills__subtitle">Soft Skills</h2>
        {Array.isArray(softSkillData) && (
          <ul className="skills__skills">
            {softSkillData.map(({ name }) => (
              <li className="skills__skill skills__skill--soft">
                <p>{name}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="skills__background">
        <img src="/skills-background.jpg" />
      </div>
    </section>
  );
}

export default Skills;
