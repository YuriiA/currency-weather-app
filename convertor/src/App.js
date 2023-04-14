import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Convertor from "./Components/Convertor";
import { Nav } from "./Components/Nav/Nav";
import { Weather } from "./Components/Weather/Weather";

import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Convertor />} />
          <Route path="/convertor" element={<Convertor />} />
          <Route path="/weather" element={<Weather />} />
          <Route
            path="*"
            element={
              <>
                <h1>404 Page not found</h1>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
