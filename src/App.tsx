import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/index";
import { About, Home, Vans } from "./pages/index";
import "./server";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vans" element={<Vans />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
