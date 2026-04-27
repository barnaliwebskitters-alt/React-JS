import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthMain from "./Auth/authMain/AuthMain";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthMain />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;