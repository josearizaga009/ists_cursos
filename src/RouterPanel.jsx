import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./panel.components/Header";
import Sidebar from "./panel.components/Sidebar";

export default function RouterPanel() {
    return (
        <Router>
            <Header />
            <Sidebar />
            <Routes>
                <Route path="/" element={"HOME"} />
                <Route path="/slides" element={"SILDES"} />
                <Route path="/cursos" element={"CURSOS"} />
            </Routes>
        </Router>
    );
}
