import { Route, Routes } from "react-router-dom";
import HomePage from "../../pages/HomePage/HomePage";
import PsychologistsPage from "../../pages/PsychologistsPage/PsychologistsPage";
import FavoritesPage from "../../pages/FavoritesPages/FavoritesPages";
import NotFound from "../NotFound/NotFound";
import AuthNav from "../AuthNav/AuthNav";
// import css from "./App.module.css";

export default function App() {
  return (
    <>
      <AuthNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/psychologists" element={<PsychologistsPage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}
