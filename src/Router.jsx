import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./components/App";
import ErrorPage from "./components/ErrorPage";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
    ]);

    return <RouterProvider router={router} />;
};

export default Router;
