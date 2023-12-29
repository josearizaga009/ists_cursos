import RouterLanding from "./RouterLanding";
import RouterPanel from "./RouterPanel";

export default function App() {
    const logued = false;

    if (logued) return <RouterPanel />;
    return <RouterLanding />;
}
