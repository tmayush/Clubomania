import React from "react";
import PropTypes from "prop-types";
import StyleManager from "../../utils/css-utils";
import eventListStyles from "./EventList.module.css";

const EventList = ({ eventsBaseList }) => {
  const styles = new StyleManager(eventListStyles);
  return (
    <section className={styles.classes(["event-list"])}>
      {eventsBaseList.map((event_details) => (
        <article
          key={event_details.id}
          className={styles.classes(["event-detail-container"], ["no-touch"])}
        >
          <h3 className={styles.classes(["event-detail-title"])}>
            {event_details.title}
          </h3>
          <p className={styles.classes(["event-detail-body-preview"])}>
            {event_details.body_preview}
          </p>
        </article>
      ))}
    </section>
  );
};

EventList.propTypes = {
  eventsBaseList: PropTypes.array,
};

export default EventList;
