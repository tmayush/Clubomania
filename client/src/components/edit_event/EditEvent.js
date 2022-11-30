import React from "react";
import PropTypes from "prop-types";
import StyleManager from "../../utils/css-utils";
import editEventStyles from "./EditEvent.module.css";

const EditEvent = (props) => {
  const styles = new StyleManager(editEventStyles);
  // TODO: apply styles.classes to HtmlFor and ids
  return (
    <section className={styles.classes(["edit-event-section"])}>
      <h1 className={styles.classes(["edit-event-heading"], ["no-touch"])}>
        EDIT EVENT
      </h1>
      <form
        className={styles.classes(["edit-event-form-container"])}
        action="/post"
        method="post"
      >
        <div className={styles.classes(["form-group"])}>
          <label
            className={styles.classes(["form-label", "no-touch"])}
            htmlFor="event_name"
          >
            event name
          </label>
          <input
            className={styles.classes(["form-input"])}
            placeholder="Event Name"
            type="text"
            name="event_name"
            id="event_name"
          />
        </div>
        <div className={styles.classes(["form-group"])}>
          <label
            className={styles.classes(["form-label", "no-touch"])}
            htmlFor="thumbnail_url"
          >
            thumbnail URL
          </label>
          <input
            className={styles.classes(["form-input"])}
            placeholder="Thumbnail URL"
            type="url"
            name="thumbnail_url"
            id="thumbnail_url"
          />
        </div>
        <div
          id={styles.classes(["event_body_preview_group"])}
          className={styles.classes(["form-group", "stretch"])}
        >
          <label
            className={styles.classes(["form-label", "no-touch"])}
            htmlFor="preview"
          >
            preview
          </label>
          <textarea
            className={styles.classes(["form-input"])}
            placeholder="Body Preview"
            name="event_preview"
            id="event_preview"
          ></textarea>
        </div>
        <div
          id={styles.classes(["event_body_group"])}
          className={styles.classes(["form-group", "stretch"])}
        >
          <label
            className={styles.classes(["form-label", "no-touch"])}
            htmlFor="event_body"
          >
            body
          </label>
          <textarea
            className={styles.classes(["form-input"])}
            placeholder="Event Body"
            name="event_body"
            id={styles.classes(["event_body"])}
          ></textarea>
        </div>
        <div className={styles.classes(["form-group", "actions__form-group"])}>
          <input
            className={styles.classes(["submit-btn", "discard-btn"])}
            type="submit"
            value="Discard"
          />
          <input
            className={styles.classes([
              "submit-btn",
              "delete-btn",
              "preference",
            ])}
            type="submit"
            value="Delete"
          />
          <input
            className={styles.classes(["submit-btn", "save-btn"])}
            type="submit"
            value="Save"
          />
        </div>
      </form>
    </section>
  );
};

EditEvent.propTypes = {};

export default EditEvent;
