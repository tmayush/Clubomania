import "./global_styles/css-reset.css";
import "./global_styles/common-styles.css";
import CardContainer from "./components/card/CardContainer";
import { useState, useEffect, useContext, createContext } from "react";
import Login from "./components/login/Login";
import AppNavbar from "./common_components/navbar/AppNavbar";
import ClubHeader from "./common_components/club_header/ClubHeader";
import coverImg from "./common_components/club_header/assets/bg-img-1.webp";
import profileImg from "./common_components/club_header/assets/valorant-pfp-1.jpg";
import EditInfo from "./components/edit_info/EditInfo";
import ClubConsole from "./components/club_console/ClubConsole";
import ClubPage from "./components/club_page/ClubPage";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Link,
} from "react-router-dom";
import { authorize } from "./utils/auth";
import Dashboard from "./components/console/Console";
import Event from "./components/events/Event";
import { AuthProvider } from "./hooks/AuthProvider";
import ClubRoutes from "./routes/ClubRoutes";
import DashBoardRoutes from "./routes/DashBoardRoutes";
import NavbarWrapper from "./common_components/navbar/NavbarWrapper";

// function Something() {
//   const { club_id } = useParams();
//   return <h1>{club_id}</h1>;
// }

function Home() {
  return (
    <Link
      style={{ paddingTop: "5rem", fontSize: "2rem", display: "block" }}
      to={"/clubs"}
    >
      Home
    </Link>
  );
}

function EventIds() {
  console.log("eh");
  const { event_id } = useParams();
  return <h1>{event_id}</h1>;
}

function App() {
  const [auth, setAuth] = useState({});
  console.log("render");

  // const checkAuthState = (auth) => {
  //   return !(Object.keys(auth).length === 0);
  // };

  useEffect(() => {
    // authorize().then((res) => {
    //   if (res.status === 200) setAuth(res.data);
    // });
  }, []);

  // After auth state changes
  useEffect(() => {
    // console.log(`isAuthorized: ${checkAuthState(auth)}`);
    // console.log(auth);
  }, [auth]);

  // return (
  //   <Event
  //     eventTitle={"hi"}
  //     eventShortDesc={"lorem ipsum"}
  //     eventThumbnailURL="/assets/test.jpg"
  //   />
  // );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavbarWrapper />}>
          <Route index element={<Home />} />
          <Route path="clubs" element={<CardContainer />} />
          <Route path="club/*" element={<ClubRoutes />} />
        </Route>
        {/* Auth */}
        <Route path="/login" element={<Login setAuth={setAuth} />} />
        <Route path="/dashboard/*" element={<DashBoardRoutes />} />
        {/* <Route
            path="dashboard"
            element={
              <ClubHeader
                clubName={auth.name}
                coverImg={coverImg}
                profileImg={profileImg}
                setAuth={setAuth}
              />
            }
          >
            <Route index element={<ClubConsole />} />
            <Route path="edit_info" element={<EditInfo />} />
            <Route path="edit_events" element={<EditInfo />} />
          </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
