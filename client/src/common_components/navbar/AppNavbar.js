import PropTypes from "prop-types";
import { Outlet, useNavigate } from "react-router-dom";
import StyleManager from "../../utils/css-utils";
import navbar_styles from "./styles/navbar.module.css";
import NavbarLink from "./NavbarLink";
import { useRef, useEffect } from "react";

const AppNavbar = ({ navLinks }) => {
  const styles = new StyleManager(navbar_styles);
  const logoSectionRef = useRef();
  const navigate = useNavigate();
  // const navLinks = {
  //   Home: "/",
  //   Clubs: "/clubs",
  //   "About Us": "/about_us",
  // };
  const navLinksComponents = [];
  for (const [page_name, path] of navLinks)
    navLinksComponents.push(
      <NavbarLink key={path} link_title={page_name} link_href={path} />
    );

  useEffect(() => {
    logoSectionRef.current.addEventListener("click", (e) => navigate("/"));
  }, []);

  return (
    <>
      <nav className={styles.classes(["navbar"])}>
        <div
          ref={logoSectionRef}
          className={styles.classes(
            ["nav-component", "brand-nav-container"],
            ["no-touch"]
          )}
        >
          <div className={styles.classes(["brand-logo-container"])}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"
              alt=""
              className={styles.classes(["brand-logo"])}
            />
          </div>
          <div className={styles.classes(["brand-text-container"])}>
            <h1 className={styles.classes(["brand-text"])}>My Brand</h1>
          </div>
        </div>
        <div className={styles.classes(["nav-component"])}>
          <ul className={styles.classes(["nav-list"])}>{navLinksComponents}</ul>
        </div>
      </nav>
      <div className={styles.classes(["empty-space"])}></div>
      <Outlet />
    </>
  );
};

AppNavbar.propTypes = {};

export default AppNavbar;
