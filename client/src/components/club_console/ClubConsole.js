import React from "react";
import PropTypes from "prop-types";
import StyleManager from "../../utils/css-utils";
import clubConsoleStyles from "./styles/clubConsole.module.css";
import ClubHeader from "../../common_components/club_header/ClubHeader";
import coverImg from "../../common_components/club_header/assets/bg-img-1.webp";
import profileImg from "../../common_components/club_header/assets/valorant-pfp-1.jpg";
import { authAndRedirect, authCheck } from "../../utils/auth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const renderMainContent = function (styles) {
  return (
    <>
      <main className={styles.classes(["console-container"])}>
        <div className={styles.classes(["item-outer"], ["no-touch"])}>
          <div className={styles.classes(["item-inner"])}>
            <h1 className={styles.classes(["box-heading"])}>create event</h1>
            <p className={styles.classes(["box-para"])}>
              Create a new event to spread a word about it
            </p>
          </div>
        </div>
        <div className={styles.classes(["item-outer"], ["no-touch"])}>
          <div className={styles.classes(["item-inner"])}>
            <h1 className={styles.classes(["box-heading"])}>edit events</h1>
            <p className={styles.classes(["box-para"])}>
              Edit existng events to update information
            </p>
          </div>
        </div>
        <div className={styles.classes(["item-outer"], ["no-touch"])}>
          <div className={styles.classes(["item-inner"])}>
            <h1 className={styles.classes(["box-heading"])}>preview events</h1>
            <p className={styles.classes(["box-para"])}>
              Preview your published events
            </p>
          </div>
        </div>
        <div className={styles.classes(["item-outer"], ["no-touch"])}>
          <div className={styles.classes(["item-inner"])}>
            <h1 className={styles.classes(["box-heading"])}>edit club info</h1>
            <p className={styles.classes(["box-para"])}>
              Edit your club info, like: cover photo, description, etc.
            </p>
          </div>
        </div>
      </main>
    </>
  );
};

const renderLoading = function (styles) {
  return (
    <div className={styles.classes(["loading-heading"], ["no-touch"])}>
      Still Loading...
    </div>
  );
};

const ClubConsole = (props) => {
  const styles = new StyleManager(clubConsoleStyles);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const navigatePathList = [
      {
        statusCode: 200,
        to: "",
      },
      {
        statusCode: 401,
        to: "/login",
      },
    ];
    authAndRedirect(navigate, navigatePathList, "/").then(() => {
      setLoading(false);
    });
  }, []);

  return loading ? renderLoading(styles) : renderMainContent(styles);
};

ClubConsole.propTypes = {};

export default ClubConsole;
