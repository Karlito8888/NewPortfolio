import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import PWAUpdateHandler from './components/PWAUpdateHandler';

function App() {
  return (
    <>
      <PWAUpdateHandler />
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
