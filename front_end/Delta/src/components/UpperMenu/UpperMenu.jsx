import "./style.css";
import { Link } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

import logo from "../../assets/images/icon.png";

export function UpperMenu() {
    const { auth, logoutUser } = useContext(AuthContext);

    const handleLogout = () => {
        logoutUser();
    };

    const emBreve = () => {
        alert("Em breve!");
    };

    const authVerify = () => {
        if (!("token" in auth)) {
            return (
                <>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>

                    <li>
                        <Link to={"/registro"}>Registro</Link>
                    </li>
                </>
            );
        } else {
            return (
                <>
                    <li>
                        <Link onClick={emBreve}>Tópicos</Link>
                    </li>
                    <li>
                        <Link onClick={handleLogout} to={"/"}>
                            Logout
                        </Link>
                    </li>
                </>
            );
        }
    };

    return (
        <>
            <menu>
                <h1>DELTA</h1>

                <img src={logo} alt="" />
            </menu>
            <nav className="links">
                <ul>
                    <li>
                        <Link to={"/"}>Home</Link>
                    </li>
                    <li>
                        <a href="#">Contate-nos</a>
                    </li>
                    {authVerify()}
                </ul>
            </nav>
        </>
    );
}
