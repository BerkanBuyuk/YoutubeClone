import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="videos/:id" element={<Detail />} />
          <Route path="search/: keyword" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
