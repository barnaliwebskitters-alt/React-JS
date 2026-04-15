import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthMain from "./Auth/authMain/AuthMain";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;