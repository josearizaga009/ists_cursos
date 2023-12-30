import RouterLanding from "./RouterLanding";
import RouterPanel from "./RouterPanel";
import Login from "./views/Login";

export default function App() {
    const logued = false;

    if (window.location.pathname == "/login" && logued == false)
        return <Login />;
    if (logued) return <RouterPanel />;
    return <RouterLanding />;
}
