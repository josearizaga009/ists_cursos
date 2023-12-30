import { useState } from "react";
import RouterLanding from "./RouterLanding";
import RouterPanel from "./RouterPanel";
import Login from "./views/Login";

export default function App() {
    // const logued = false;
    const [logued, setLogued] = useState(false);

    if (window.location.pathname == "/login" && logued == false)
        return <Login onLogin={() => setLogued(true)} />;
    if (logued) return <RouterPanel />;
    return <RouterLanding />;
}
