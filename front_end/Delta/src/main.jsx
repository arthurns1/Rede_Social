import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Home from "./routes/Home/Home.jsx";
import { Login } from "./routes/Login/Login.jsx";
import { Registro } from "./routes/Registro/Registro.jsx";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import Topicos from "./routes/Topicos/Topicos.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "registro",
                element: <Registro />,
            },
            {
                path: "/topicos",
                element: <Topicos />,
            },
        ],
    },
]);

//Janelas

//Login
//Registro
//Perfil

//Conversa

//"perfil" Comunidade
//Criar comunidade

//Criação de tópicos

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <RouterProvider router={router} />
        </AuthProvider>
    </StrictMode>,
);
