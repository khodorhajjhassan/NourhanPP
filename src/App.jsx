import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./componenets/Landing";
import Gallery from "./componenets/Gallery";
import Cursor from "./componenets/Cursor";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Cursor />
      </Router>
    </>
  );
}

export default App;
