import React, { useEffect } from "react";
import PropTypes from "prop-types";
import StyleManager from "../../utils/css-utils";
import editEventsStyles from "./EditEvents.module.css";
import EventList from "../../components/event_list/EventList";
import EditEvent from "../../components/edit_event/EditEvent";
import NavbarWrapper from "../../common_components/navbar/NavbarWrapper";
import useFetchPosts from "../../hooks/useFetchPosts";
import { useAuth } from "../../hooks/AuthProvider";

const EditEvents = (props) => {
  const styles = new StyleManager(editEventsStyles);
  const auth = useAuth();
  const eventsBaseList = useFetchPosts(auth.username);
  return (
    <>
      <NavbarWrapper />
      <main className={styles.classes(["container"])}>
        <EventList eventsBaseList={eventsBaseList} />
        <EditEvent />
      </main>
    </>
  );
};

EditEvents.propTypes = {};

export default EditEvents;
