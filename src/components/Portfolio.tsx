import { useState, useRef } from "react";
import { ProjectsData, ProjectsInteface } from "../data/projects";
import useOnScreen from "../hooks/useOnScreen";

interface Props {
  projectsData: ProjectsInteface[];
}

function Portfolio(props: Props) {
  const { projectsData } = props;
  const tags = projectsData
    .reduce((output: string[], project: ProjectsInteface) => {
      project.tags.filter((tag) => !output.includes(tag)).map((tag) => output.push(tag));
      return output;
    }, [])
    .filter((tag) => tag != "");

  const [activeTags, setActiveTags] = useState<string[]>([]);

  const toggleTag = (tag: string) =>
    setActiveTags(activeTags.includes(tag) ? activeTags.filter((x) => x !== tag) : [...activeTags, tag]);

  const filteredProjects = activeTags.length
    ? ProjectsData.filter((project) => {
        return (
          project.tags.reduce((output: string[], tag: string) => {
            if (activeTags.includes(tag)) output.push(tag);
            return output;
          }, []).length == activeTags.length
        );
      })
    : ProjectsData;

  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const [isLoadedIn, setIsLoadedIn] = useState(false);
  let rootClass = "portfolio";

  if (!isLoadedIn && isOnScreen) setIsLoadedIn(true);
  if (isLoadedIn) rootClass += " animate-in";

  return (
    <section className={rootClass} ref={elementRef}>
      <div className="portfolio__container">
        <h2 className="portfolio__title">
          My <span>Portfolio</span>
        </h2>
        <div className="portfolio__filters">
          <ul className="portfolio__tags">
            {tags.map((tag) => (
              <li
                className={`portfolio__tag${activeTags.includes(tag) ? " portfolio__tag--active" : ""}`}
                onClick={() => toggleTag(tag)}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <div className="portfolio__portfolio">
          {Array.isArray(filteredProjects) && filteredProjects.length ? (
            <ul className="portfolio__projects">
              {filteredProjects.map(({ title, image, link }) => (
                <li className="portfolio__project project" key={title.toLowerCase().replace(" ", "_")}>
                  <div className="project__splash">
                    <div className="project__image">
                      <img src={image} />
                    </div>
                    <a className="project__readmore" href={link} target="_blank">
                      Read More
                    </a>
                  </div>
                  <h2 className="project__title">{title}</h2>
                </li>
              ))}
            </ul>
          ) : (
            <p className="portfolio__noprojects">No Projects Availble</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
