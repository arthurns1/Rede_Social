import "./style.css";
import { TextField } from "../../components/TextFields/TextField";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import { useContext } from "react";

import { useNavigate } from "react-router-dom";

export function Login() {
    const { auth, authUser } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const login = form.get("login");
        const senha = form.get("senha");

        fetch("http://localhost:2000/login", {
            method: "POST",
            body: JSON.stringify({
                login: login,
                senha: senha,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((token) => {
                authUser(token.results);
                navigate("/");
            });
    }

    return (
        <main className="login">
            <form action="" method="POST" onSubmit={handleSubmit}>
                <h2>Login</h2>
                <div className="upper-text">
                    Insira abaixo suas informações de Login e senha
                </div>
                <TextField
                    name="login"
                    placeholder="Digite seu login"
                    type="text"
                />
                <TextField
                    name="senha"
                    placeholder="Digite sua senha"
                    type="password"
                />
                <Link to={"/registro"} className="criar">
                    Criar nova Conta
                </Link>
                <SubmitButton name="Logar" />
            </form>
        </main>
    );
}
