import React from "react";
import PropTypes from "prop-types";
import { Route, Routes } from "react-router-dom";
import ClubConsole from "../components/club_console/ClubConsole";
import EditInfo from "../components/edit_info/EditInfo";
import ClubHeader from "../common_components/club_header/ClubHeader";
import LoadingWrapper from "../common_components/loading/LoadingWrapper";
import { AuthProvider } from "../hooks/AuthProvider";
import Loading from "../common_components/loading/Loading";

const DashBoardRoutes = (props) => {
  return (
    <Routes>
      <Route path="/" element={<LoadingWrapper />}>
        <Route index element={<ClubConsole />} />
        <Route path="edit_info" element={<EditInfo />} />
        <Route path="edit_events" element={<EditInfo />} />
        <Route path="*" element={<h1>404</h1>} />
      </Route>
    </Routes>
  );
};

DashBoardRoutes.propTypes = {};

export default DashBoardRoutes;
