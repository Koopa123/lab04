import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import { createRoot } from "react-dom/client";
import Main from "./mainPAGINAPRINCIPAL";
import MainProductos from "./mainPAGINAPRODUCTOS";
import MainPrincipal from "./mainPAGINAPRINCIPAL";
import MainDescuentos from "./mainPAGINADESCUENTOS";

import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Single from './single';
import Basic from './layout/basic';
 

const router = createBrowserRouter([
    {
        path: "/",
        element: <Basic />,
        children: [
            {
                path: '',
                element: <>
                    <div className="col-md-12">
                        <Main></Main>
                    </div>
                    
                </>
            },
            {
                path: "detalle/:slug",
                element: <Single />,
            },
            {
                path: "/productos",
                element: <MainProductos />,
            },
            {
                path: "/principal",
                element: <MainPrincipal />,
            },
            {
                path: "/descuentos",
                element: <MainDescuentos />,
            },
        ],
    },
]);

const root = createRoot(document.getElementById("root"));
root.render(
    <RouterProvider router={router} />
);