import data from "./db.json";
import "react-vertical-timeline-component/style.min.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

const Parcours = () => {
  const defaultContentStyle = {
    background: "transparent",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    borderRadius: "8px",
    border: "1px solid rgba(255, 255, 255, 0.2)",
    position: "relative",
    overflow: "visible",
    zIndex: 1,
    color: "inherit"
  };

  const defaultContentArrowStyle = { borderRight: "7px solid rgba(255, 255, 255, 0.1)" };

  const glassStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    borderRadius: "8px",
    zIndex: -1
  };

  const dateStyle = {
    color: "red",
    fontWeight: "bold",
    fontSize: "1.2rem",
    background: "white",
    padding: "5px 10px",
    borderRadius: "4px",
    boxShadow: "0 0 5px rgba(0,0,0,0.2)",
    position: "relative",
    zIndex: 2
  };

  return (
    <section 
      className="parcours-container" 
      id="parcours"
      aria-labelledby="title-parcours"
    >
      <h2 
        id="title-parcours" 
        className="parcours-title"
      >
        Mon parcours
      </h2>
      <VerticalTimeline 
        lineColor={"#70d7f7"}
        role="list"
        aria-label="Chronologie de mon parcours"
      >
        {data.timeline.map((event) => {
          return (
            <VerticalTimelineElement
              key={event.id}
              date={event.date}
              dateClassName="custom-date-class"
              className="timeline-element"
              contentStyle={defaultContentStyle}
              contentArrowStyle={defaultContentArrowStyle}
              dateStyle={dateStyle}
              iconStyle={{
                background: "#ffffff",
                backgroundImage: `url(${event.icon})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
              role="listitem"
              aria-label={`${event.date}: ${event.title}`}
            >
              <div style={glassStyle} />
              <div 
                style={{ position: "relative", zIndex: 2 }}
                role="article"
              >
                <h4 
                  className="vertical-timeline-element-title"
                  id={`title-${event.id}`}
                >
                  {event.title}
                </h4>
                <h5 
                  className="vertical-timeline-element-subtitle"
                  id={`subtitle-${event.id}`}
                >
                  {event.subtitle}
                </h5>
                <h6 
                  className="vertical-timeline-element-location"
                  id={`location-${event.id}`}
                >
                  {event.location}
                </h6>

                {event.description && (
                  <p id={`description-${event.id}`}>
                    {event.description}
                  </p>
                )}

                {event.subdescription && event.subdescription.length > 0 && (
                  <p 
                    id={`subdescription-${event.id}`}
                    role="list"
                    aria-label="Détails supplémentaires"
                  >
                    {event.subdescription.map((line, index) => (
                      <span 
                        key={index}
                        role="listitem"
                      >
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                )}
              </div>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};

export default Parcours;
