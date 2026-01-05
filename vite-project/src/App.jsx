import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import LandingPage from "./Components/LandingPage";
import LandingPage2 from "./Components/LandingPage2";
import AboutUS from "./Components/AboutUS";
import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Partner from "./Components/Partner";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <LandingPage />
              <LandingPage2 />
              <AboutUS />
              <ContactUs />
              <Footer />
            </>
          }
        />

        {/* Partner Page */}
        <Route
          path="/partner"
          element={
            <>
              <Partner />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
