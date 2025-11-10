import "./App.css";
import { Outlet } from "react-router-dom";
import { UpperMenu } from "./components/UpperMenu/UpperMenu";

function App() {
    return (
        <>
            <UpperMenu />
            <Outlet />
        </>
    );
}

export default App;
