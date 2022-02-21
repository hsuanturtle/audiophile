import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import CheckoutPage from "./pages/CheckoutPage";
import HeadPhonesPage from "./pages/HeadPhonesPage";
import EarphonesPage from "./pages/EarphonesPage";
import SpeakerPage from "./pages/SpeakerPage";
import SingleProductPage from "./pages/SingleProductPage";
import ErrorPage from "./pages/ErrorPage";
import Footer from "./components/Footer";

function App() {
  const products = useSelector((state) => state.products);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadPhonesPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
        <Route path="/speaker" element={<SpeakerPage />} />
        {products.map((product) => {
          return (
            <Route
              key={product.id}
              path={`/products/${product.slug}`}
              element={<SingleProductPage product={product} />}
            />
          );
        })}
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
