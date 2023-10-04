import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Clothing from "../components/Clothing/Clothing";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            // errorElement: <Home />,
        },
        {
            path: "/shop",
            element: <Shop />,
            children: [
                { index: true, element: <Clothing url={"https://fakestoreapi.com/products"}/> },
                {
                    path: "/shop/mens-clothing",
                    element: <Clothing url={"https://fakestoreapi.com/products/category/men's%20clothing"}/>,
                },
                {
                    path: "/shop/womens-clothing",
                    element: <Clothing url={"https://fakestoreapi.com/products/category/women's%20clothing"}/>,
                },
            ]
        }

    ]);

    return <RouterProvider router={router} />;
};

export default Router;
