import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Root from "./containers/Root";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          {/* <Route path="about" element={<About />} />
          <Route path="nested" element={<NestedPage />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
