import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./Pages/HomePage";
import CheckPut from "./Pages/CheckPut";

const App = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout" element={<CheckPut />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
