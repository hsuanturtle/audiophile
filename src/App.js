import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import PayPage from "./pages/PayPage";
import HeadPhonesPage from "./pages/HeadPhonesPage";
import EarphonesPage from "./pages/EarphonesPage";
import SpeakerPage from "./pages/SpeakerPage";
import SingleProductPage from "./pages/SingleProductPage";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadPhonesPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        <Route path="/singleproduct" element={<SingleProductPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pay" element={<PayPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
