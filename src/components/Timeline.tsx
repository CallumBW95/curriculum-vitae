import { useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSchool, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import useOnScreen from "../hooks/useOnScreen";
import { EventInterface } from "../data/event";

interface Props {
  eventsData: EventInterface[];
}

function Timeline(props: Props) {
  const eventsData: EventInterface[] = props.eventsData;
  const elementRef = useRef<HTMLDivElement>(null);
  const isOnScreen = useOnScreen(elementRef);
  const [isLoadedIn, setIsLoadedIn] = useState(false);
  let rootClass = "timeline";

  if (!isLoadedIn && isOnScreen) setIsLoadedIn(true);
  if (isLoadedIn) rootClass += " animate-in";

  return (
    <section className={rootClass} ref={elementRef}>
      <div className="timeline__container container">
        <h2 className="timeline__title">
          My <span>History</span>
        </h2>

        <ul className="timeline__events">
          {Array.isArray(eventsData) &&
            eventsData.map(({ title, description, date, role, type }, i) => (
              <li className="timeline__event event" key={i}>
                <div className="event__details">
                  <p className="event__details-role">{role}</p>
                  {date.from && date.to && (
                    <p className="event__details-date">
                      {date.from} - {date.to}
                    </p>
                  )}
                  <p className="event__details-type">
                    <FontAwesomeIcon icon={type.toLowerCase() === "education" ? faSchool : faBriefcase} />
                    <span>{type}</span>
                  </p>
                </div>
                <div className="event__description">
                  <h3 className="event__description-title">{title}</h3>
                  <div className="event__description-content" dangerouslySetInnerHTML={{ __html: description }}></div>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
}

export default Timeline;
