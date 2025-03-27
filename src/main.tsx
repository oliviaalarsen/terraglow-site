// React setup and app entry point

// Enables strict mode checks for development
import { StrictMode } from 'react';

// For rendering the app into the DOM
import { createRoot } from 'react-dom/client';

// Main styles
import './index.css';

// Bootstrap CSS framework
import 'bootstrap/dist/css/bootstrap.min.css';

// React Router setup
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Import page components and loader
import ProductList, { productListLoader } from './components/ProductList.tsx';
import CartList from './components/CartList.tsx';
import Root from './Root.tsx';
import ErrorPage from './components/ErrorPage.tsx';
import ProductDetails from './components/ProductDetails.tsx';
import HomePage from './components/HomePage.tsx';
import AboutUs from './components/AboutUs.tsx';
import SkinTypeQuiz from './components/SkinTypeQuiz.tsx';
import IngredientSpotlight from "./components/IngredientSpotlight";

// Set up all app routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,               // Layout component with navbar & footer
    errorElement: <ErrorPage />,     // 404 or fallback error page
    children: [
      { index: true, element: <HomePage /> },  // Landing page
      { path: "products", element: <ProductList />, loader: productListLoader },
      { path: "cart", element: <CartList /> },
      { path: "products/:productId", element: <ProductDetails /> },
      { path: "/quiz", element: <SkinTypeQuiz /> },
      { path: "/ingredients", element: <IngredientSpotlight /> },
      { path: "about", element: <AboutUs /> }
    ]
  }
]);

// Mount app to the DOM
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
