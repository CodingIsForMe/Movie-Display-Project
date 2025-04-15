import "./css/App.css";
import NavBar from "./components/NavBar";
import Favourites from "./pages/Favourites";
import { MovieProvider } from "./contexts/MainContext";
import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <MovieProvider>
      <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </main>
    </MovieProvider>
  );
}

export default App;
