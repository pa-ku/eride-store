import Home from "./pages/Home";
import "./global.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./pages/About";
import ProductCategory from "./pages/AllProducts";
import ProductSection from "./pages/ProductShowcase";
import Favorites from "./pages/Favorites";
import CreateProduct from "./pages/CreateProduct";
import MainLayout from "./pages/layouts/MainLayout";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route element={<MainLayout />}>
            <Route path="/product">
              <Route path="monopatines/" element={<ProductCategory />} />
              <Route path="monociclos/" element={<ProductCategory />} />
              <Route path="id/:id" element={<ProductSection />} />
              <Route path="create" element={<CreateProduct />} />
            </Route>

            <Route path="/about" element={<About />} />
            <Route path="/favorites" element={<Favorites />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
