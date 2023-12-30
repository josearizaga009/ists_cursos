import "./RouterPanel.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./panel.components/Header";
import Sidebar from "./panel.components/Sidebar";
import { useState } from "react";
export default function RouterPanel() {
    const [showSidebar, setShowSidebar] = useState("open");
    const handleClickShowSidebar = () => {
        setShowSidebar(showSidebar == "open" ? "close" : "open");
    };
    return (
        <Router>
            <div className="panel-page">
                <div className={"panel-page-state " + showSidebar}></div>
                <Header onClickButtonBars={handleClickShowSidebar} />

                <div className="panel-page-content">
                    <Sidebar />
                    <div className="panel-page-page">
                        <Routes>
                            <Route path="/" element={"HOME"} />
                            <Route path="/slides" element={"SILDES"} />
                            <Route path="/cursos" element={"CURSOS"} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}
