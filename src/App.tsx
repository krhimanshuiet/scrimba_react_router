import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/index";
import { About, Home } from "./pages/index";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
