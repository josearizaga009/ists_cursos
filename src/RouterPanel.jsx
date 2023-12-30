import "./RouterPanel.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./panel.components/Header";
import Sidebar from "./panel.components/Sidebar";
import { useState } from "react";
import Home from "./panel.views/Home";
import Users from "./panel.views/Users";
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
                            <Route path="/" element={<Home />} />
                            <Route path="/users" element={<Users />} />
                            <Route path="/cursos" element={"CURSOS"} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}
