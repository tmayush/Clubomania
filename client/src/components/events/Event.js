import React from "react";
import PropTypes from "prop-types";
import StyleManager from "../../utils/css-utils";
import eventStyles from "./styles/event.module.css";
import { useState, useEffect } from "react";

const Event = ({ id, eventTitle, eventShortDesc, eventThumbnailURL }) => {
  // console.log(id);
  const styles = new StyleManager(eventStyles);
  return (
    <div className={styles.classes(["event-bar"])}>
      <section className={styles.classes(["event-details"])}>
        <h1 className={styles.classes(["event-title"])}>{eventTitle}</h1>
        <p className={styles.classes(["event-desc"])}>{eventShortDesc}</p>
      </section>
      <img
        className={styles.classes(["event-image"])}
        src={eventThumbnailURL}
        alt="event-image"
      />
    </div>
  );
};

Event.propTypes = {};

export default Event;
