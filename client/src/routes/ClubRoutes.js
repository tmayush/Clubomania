import React from "react";
import PropTypes from "prop-types";
import { Route, Routes, useParams } from "react-router-dom";
import ClubPage from "../components/club_page/ClubPage";

const ClubRoutes = (props) => {
  function EventIds() {
    console.log("eh");
    const { event_id } = useParams();
    return <h1>{event_id}</h1>;
  }
  return (
    <Routes>
      <Route path=":club_username">
        <Route index element={<ClubPage />} />
        <Route path="event/:event_id" element={<EventIds />} />
      </Route>
    </Routes>
  );
};

ClubRoutes.propTypes = {};

export default ClubRoutes;
