import { createBrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import HomePage from "./pages/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import Error from "./components/Error";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            { index: true, element: <HomePage />},
            { path: 'products/:id', element: <ProductDetailsPage />}
        ],
        errorElement: <ErrorPage/>  
    }
])

export default router