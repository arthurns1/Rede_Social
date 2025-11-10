import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

export default function Home() {
    const { auth, authUser } = useContext(AuthContext);
    function auth_verify() {
        if (!("token" in auth)) {
            return (
                <ul>
                    <li>
                        <Link to="login">Login</Link>
                    </li>
                    <li>
                        <Link to="registro">Registro</Link>
                    </li>
                </ul>
            );
        } else {
            return <h1>Em andamento</h1>;
        }
    }

    return auth_verify();
}
