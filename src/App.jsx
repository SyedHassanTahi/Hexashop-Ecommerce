import { lazy, Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import Loading from "./components/Loading";

const HomePage = lazy(() => import("./Pages/HomePage"));
const AboutPage = lazy(() => import("./Pages/AboutPage"));
const ProductPage = lazy(() => import("./Pages/ProductPage"));
const SingleProduct = lazy(() => import("./Pages/SingleProduct"));
const ContactPage = lazy(() => import("./Pages/ContactPage"));
const AddCartPage = lazy(() => import("./Pages/AddCartPage"));

// import HomePage from './Pages/HomePage';
// import AboutPage from './Pages/AboutPage';
// import ProductPage from './Pages/ProductPage';
// import SingleProduct from './Pages/SingleProduct';
// import ContactPage from './Pages/ContactPage';
// import AddCartPage from './Pages/AddCartPage';
const App = () => {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
          <Route path='/product' element={<ProductPage />} />
          <Route path='/singleproduct' element={<SingleProduct />} />
          <Route path='/contact' element={<ContactPage />} />
          <Route path='/cart' element={<AddCartPage/>} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
