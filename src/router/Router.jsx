import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import WomensClothing from "../pages/Shop/WomensClothing/WomensClothing";
import MensClothing from "../pages/Shop/MensClothing/MensClothing";
import AllClothing from "../pages/Shop/AllClothing/AllClothing";
import Welcome from "../components/Welcome/Welcome";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            // errorElement: <Home />,
            children: [
                
                { index: true, element: <Welcome /> },
                {
                    path: "/shop",
                    element: <AllClothing />,
                },
                {
                    path: "/shop/mens-clothing",
                    element: <MensClothing />,
                },
                {
                    path: "/shop/womens-clothing",
                    element: <WomensClothing />,
                },
            ]
        }

    ]);

    return <RouterProvider router={router} />;
};

export default Router;
