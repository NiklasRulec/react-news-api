import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NewsSection from "./pages/NewsSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NewsSection />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
