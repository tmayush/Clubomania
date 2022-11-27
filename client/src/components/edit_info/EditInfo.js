import PropTypes from "prop-types";
import StyleManager from "../../utils/css-utils";
import editInfoStyles from "./styles/editInfo.module.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { authAndRedirect } from "../../utils/auth";
import { useAuth } from "../../hooks/AuthProvider";

const renderMainContent = function (styles) {
  return (
    <main className={styles.classes(["main-content"])}>
      <div className={styles.classes(["title-wrapper"], ["no-touch"])}>
        <h3>EDIT INFORMATION</h3>
      </div>
      <form
        className={styles.classes(["edit-form-container"])}
        action="/post"
        method="post"
      >
        <div className={styles.classes(["form-group"])}>
          <label
            className={styles.classes(["form-label"], ["no-touch"])}
            htmlFor="username"
          >
            USERNAME
          </label>
          <input
            className={styles.classes(["form-input"])}
            placeholder="username"
            type="text"
            name="club_username"
            id="username"
          />
        </div>
        <div className={styles.classes(["form-group"])}>
          <label
            className={styles.classes(["form-label"], ["no-touch"])}
            htmlFor="password"
          >
            PASSWORD
          </label>
          <input
            className={styles.classes(["form-input"])}
            placeholder="password"
            type="password"
            name="club_password"
            id="password"
          />
        </div>
        <div
          className={styles.classes(["form-group", "club-name__form-group"])}
        >
          <label
            className={styles.classes(["form-label"], ["no-touch"])}
            htmlFor="club_name"
          >
            CLUB NAME
          </label>
          <input
            className={styles.classes(["form-input"])}
            placeholder="club name"
            type="text"
            name="club_name"
            id="club_name"
          />
        </div>
        <div className={styles.classes(["form-group", "acronym__form-group"])}>
          <label
            className={styles.classes(["form-label"], ["no-touch"])}
            htmlFor="acronym"
          >
            ACRONYM
          </label>
          <input
            className={styles.classes(["form-input"])}
            placeholder="acronym"
            type="text"
            name="club_acronym"
            id="acronym"
          />
        </div>
        <div
          className={styles.classes([
            "form-group",
            "cover-photo-url__form-group",
          ])}
        >
          <label
            className={styles.classes(["form-label"], ["no-touch"])}
            htmlFor="cover_photo_url"
          >
            COVER PHOTO URL
          </label>
          <input
            className={styles.classes(["form-input"])}
            placeholder="cover photo URL"
            type="text"
            name="cover_photo_url"
            id="cover_photo_url"
          />
        </div>
        <div
          className={styles.classes([
            "form-group",
            "profile-photo-url__form-group",
          ])}
        >
          <label
            className={styles.classes(["form-label"], ["no-touch"])}
            htmlFor="profile_photo_url"
          >
            PROFILE PHOTO URL
          </label>
          <input
            className={styles.classes(["form-input"])}
            placeholder="profile photo URL"
            type="text"
            name="profile_photo_url"
            id="profile_photo_url"
          />
        </div>
        <div className={styles.classes(["form-group", "tagline__form-group"])}>
          <label
            className={styles.classes(["form-label"], ["no-touch"])}
            htmlFor="tagline"
          >
            TAGLINE
          </label>
          <textarea
            className={styles.classes(["form-input"])}
            placeholder="tagline"
            name="tagline"
            id="tagline"
          ></textarea>
        </div>
        <div
          className={styles.classes(["form-group", "description__form-group"])}
        >
          <label
            className={styles.classes(["form-label"], ["no-touch"])}
            htmlFor="description"
          >
            DESCRIPTION
          </label>
          <textarea
            className={styles.classes(["form-input"])}
            placeholder="description"
            name="description"
            id="description"
          ></textarea>
        </div>
        <div className={styles.classes(["form-group", "actions__form-group"])}>
          <input
            className={styles.classes(["submit-btn", "cancel-btn"])}
            type="submit"
            value="Cancel"
          />
          <input
            className={styles.classes(["submit-btn", "save-btn"])}
            type="submit"
            value="Save"
          />
        </div>
      </form>
    </main>
  );
};

const renderLoading = function (styles) {
  return (
    <div className={styles.classes(["loading-heading"], ["no-touch"])}>
      Still Loading...
    </div>
  );
};

const EditInfo = ({}) => {
  const styles = new StyleManager(editInfoStyles);
  const [isLoading, setIsLoading] = useState(true);
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
      setIsLoading(false);
    });
  }, []);

  return isLoading ? renderLoading(styles) : renderMainContent(styles);
};

EditInfo.propTypes = {};

export default EditInfo;
