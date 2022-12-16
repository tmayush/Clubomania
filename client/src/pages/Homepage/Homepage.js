import React from "react";
import PropTypes from "prop-types";
import HomepageStyles from "./styles/Homepage.module.css";
import StyleManager from "../../utils/css-utils";
import Card from "../../components/card/Card";
import layersSVG from "./assets/layers.svg";

const Homepage = (props) => {
  const styles = new StyleManager(HomepageStyles);
  function c(classArray, globalsArray = []) {
    return styles.classes(classArray, globalsArray);
  }
  const clubProperties = [
    {
      username: "cosc",
      acronym: "COSC",
      tagline: "Learn. Code. Share.",
      cover_photo_url:
        "https://raw.githubusercontent.com/cbitosc/cbitosc.github.io/8d93e63f1a7f7875dd03011ff5e9a1d2fdccb69c/_site/img/banner.svg",
      profile_photo_url:
        "https://hacktoberfest.cbit.org.in/assets/img/logo_cosc.png",
    },
    {
      username: "gdsc",
      acronym: "GDSC",
      tagline: "Google Developer Student Clubs",
      cover_photo_url:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2.0,f_auto,g_center,h_650,q_auto:good,w_2560/v1/gcs/platform-data-dsc/contentbuilder/dsc-bevy-chapterevents-03%20%281%29.png",
      profile_photo_url:
        "https://res.cloudinary.com/startup-grind/image/upload/c_fill,dpr_2,f_auto,g_center,q_auto:good/v1/gcs/platform-data-dsc/contentbuilder/GDG-Bevy-ChapterThumbnail.png",
    },
  ];
  return (
    <main className={c(["main_content"])}>
      <section className={c(["jumbotron"])}>
        <section className={c(["main-heading"])}>
          <h1 className={c(["main-text"])}>Welcome to Clubomania</h1>
          <p className={c(["tagline"])}>
            Clubomania is a place for you to explore clubs so you can connect
            with like-minded people and expand your network. Student Clubs are
            formed around academic and national themes to add to the rich
            mosaics of student life.
          </p>
        </section>
      </section>
      <section className={c(["popular-clubs"], ["no-touch"])}>
        <h3>Popular Clubs</h3>
        <div className={styles.classes(["cardSection"])}>
          {clubProperties.map((clubProperty) => {
            return (
              <Card key={clubProperty.username} clubProperties={clubProperty} />
            );
          })}
        </div>
      </section>
      <section className={c(["layered-stacks"])}>
        <img className={c([], ["no-drag"])} src={layersSVG} alt="" srcset="" />
      </section>
      <section className={c(["content-section"])}>
        <h1 className={c(["team-heading"])}>Meet Our Team</h1>
        <section className={c(["team-card-sec"])}>
          <div className={c(["card"])}>
            <section className={c(["card-bg"])}>
              <img
                className={c(["card-image"])}
                src="card-image.jpeg"
                width="100px"
                height="100px"
              />
              <h2>RITHVIK RAMDAS</h2>
            </section>
            <section className={c(["card-content"])}>
              <p className={c(["card-desc"])}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium ipsa ipsum in reiciendis error a, quasi omnis vel
                similique blanditiis, doloremque quod vitae eius suscipit animi
                sint facere corrupti ad.
              </p>
              <h2>Follow Me</h2>
              <div className={c(["social-media"])}>
                <a className={c(["icon"])} href="#">
                  <img src="linkedin.png" height="23px" />
                </a>
                <a className={c(["icon"])} href="#">
                  <img src="instagram.png" height="23px" />
                </a>
                <a className={c(["icon"])} href="#">
                  <img src="twitter.png" height="23px" />
                </a>
              </div>
            </section>
          </div>
          <div className={c(["card"])}>
            <section className={c(["card-bg"])}>
              <img
                className={c(["card-image"])}
                src="mayush.jpg"
                width="100px"
                height="100px"
              />
              <h2>MAYUSH TIMMAPURAM</h2>
            </section>
            <section className={c(["card-content"])}>
              <p className={c(["card-desc"])}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium ipsa ipsum in reiciendis error a, quasi omnis vel
                similique blanditiis, doloremque quod vitae eius suscipit animi
                sint facere corrupti ad.
              </p>
              <h2>Follow Me</h2>
              <div className={c(["social-media"])}>
                <a className={c(["icon"])} href="#">
                  <img src="linkedin.png" height="23px" />
                </a>
                <a className={c(["icon"])} href="#">
                  <img src="instagram.png" height="23px" />
                </a>
                <a className={c(["icon"])} href="#">
                  <img src="twitter.png" height="23px" />
                </a>
              </div>
            </section>
          </div>
          <div className={c(["card"])}>
            <section className={c(["card-bg"])}>
              <img
                className={c(["card-image"])}
                src="kushal.jpg"
                width="100px"
                height="100px"
              />
              <h2>KUSHAL RATHI</h2>
            </section>
            <section className={c(["card-content"])}>
              <p className={c(["card-desc"])}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium ipsa ipsum in reiciendis error a, quasi omnis vel
                similique blanditiis, doloremque quod vitae eius suscipit animi
                sint facere corrupti ad.
              </p>
              <h2>Follow Me</h2>
              <div className={c(["social-media"])}>
                <a className={c(["icon"])} href="#">
                  <img src="linkedin.png" height="23px" />
                </a>
                <a className={c(["icon"])} href="#">
                  <img src="instagram.png" height="23px" />
                </a>
                <a className={c(["icon"])} href="#">
                  <img src="twitter.png" height="23px" />
                </a>
              </div>
            </section>
          </div>
        </section>
      </section>
    </main>
  );
};

Homepage.propTypes = {};

export default Homepage;
