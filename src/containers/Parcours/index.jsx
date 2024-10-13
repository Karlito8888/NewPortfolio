import data from "./db.json";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Parcours = () => {
  const defaultContentStyle = {
    background: "linear-gradient(to top, #dddddd, #ffffff, #ffffff, #70d7f7)",
    color: "#333",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)", // Ajout de l'ombre
    borderRadius: "8px",
  };

  const defaultContentArrowStyle = { borderRight: "7px solid #70d7f7" };

  return (
    <section className="parcours-container" id="parcours">
      <h2 className="parcours-title">Mon parcours</h2>
      <VerticalTimeline lineColor={"#70d7f7"}>
        {data.timeline.map((event) => {
          return (
            <VerticalTimelineElement
              key={event.id}
              date={event.date}
              dateClassName="custom-date-class"
              className="timeline-element"
              contentStyle={defaultContentStyle}
              contentArrowStyle={defaultContentArrowStyle}
              iconStyle={{
                background: "#ffffff",
                backgroundImage: `url(${event.icon})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <h4 className="vertical-timeline-element-title">{event.title}</h4>
              <h5 className="vertical-timeline-element-subtitle">
                {event.subtitle}
              </h5>
              <h6 className="vertical-timeline-element-location">
                {event.location}
              </h6>

              {event.description && <p>{event.description}</p>}

              {event.subdescription && event.subdescription.length > 0 && (
                <p>
                  {event.subdescription.map((line, index) => (
                    <span key={index}>
                      {line}
                      <br />
                    </span>
                  ))}
                </p>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Parcours;
