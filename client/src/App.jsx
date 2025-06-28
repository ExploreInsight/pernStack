import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import { useThemeStore } from "./store/useThemeStore";

const App = () => {
  const {theme} = useThemeStore();
  return (
    <div
     data-theme={theme}  className="min-h-screen bg-base-200 transition-colors duration-300"
    >
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proudct/:id" element={<Products />} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;
