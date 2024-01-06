import "./RouterPanel.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./panel.components/Header";
import Sidebar from "./panel.components/Sidebar";
import { useState } from "react";
import Home from "./panel.views/Home";
import Users from "./panel.views/Users";
import Slider from "./panel.views/Slider";
import NotFound from "./views/NotFound";
import Students from "./panel.views/Students";
import Courses from "./panel.views/Courses";
import Redes from "./panel.views/Redes";
import Instituciones from "./panel.views/Instituciones";
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
                            <Route path="/slider" element={<Slider />} />
                            <Route path="/students" element={<Students />} />
                            <Route path="/courses" element={<Courses />} />
                            <Route path="/redes" element={<Redes />} />
                            <Route
                                path="/instituciones"
                                element={<Instituciones />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </Router>
    );
}
