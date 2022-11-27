// import React from "react";
import PropTypes from "prop-types";
import StyleManager from "../../utils/css-utils";
import fetchUtil from "../../utils/fetch";
import cardContainerStyles from "./styles/cardContainer.module.css";
import Card from "./Card";
import logo from "../../assets/test-wide.jpg";
import { useEffect, useRef, useState } from "react";

const CardContainer = (props) => {
  const [clubProperties, setClubProperties] = useState([]);
  const styles = new StyleManager(cardContainerStyles);

  useEffect(() => {
    async function fetchDetails() {
      // Can optimize by not sending requests each time
      const result = await fetchUtil.getRequest("/api/clubs");
      setClubProperties(result.data);
    }
    fetchDetails();
  }, []);
  return (
    <main>
      <div className={styles.classes(["hero"], ["centerElement", "no-touch"])}>
        clubs
      </div>
      <div className={styles.classes(["cardSection"])}>
        {clubProperties.map((clubProperty) => {
          return (
            <Card key={clubProperty.username} clubProperties={clubProperty} />
          );
        })}
      </div>
    </main>
  );
};

CardContainer.propTypes = {};

export default CardContainer;