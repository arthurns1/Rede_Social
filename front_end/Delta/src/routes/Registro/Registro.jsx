import { TextField } from "../../components/TextFields/TextField";
import { SubmitButton } from "../../components/SubmitButton/SubmitButton";
import "./style.css";
import { useNavigate } from "react-router-dom";

export function Registro() {
    const navigate = useNavigate();

    function handleSubmit(event) {
        event.preventDefault();

        const form = new FormData(event.currentTarget);
        const login = form.get("login");
        const senha = form.get("senha");

        fetch("http://localhost:2000/usuarios/create", {
            method: "POST",
            body: JSON.stringify({
                login: login,
                senha: senha,
            }),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(() => {
            navigate("/");
        });
    }

    return (
        <main className="registro">
            <form action="" method="POST" onSubmit={handleSubmit}>
                <h2>Registro</h2>
                <div className="upper-text">
                    Crie sua conta preenchendo as informações abaixo
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

                <SubmitButton name="registro" />
            </form>
        </main>
    );
}
