import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contacts from "./landing.views/Contacts";
import Home from "./landing.views/Home";
import Header from "./landing.components/Header";
import Footer from "./landing.components/Footer";
import Cursos from "./landing.views/Cursos";
import Nosotros from "./landing.views/Nosotros";
import Certificados from "./landing.views/Certificados";

export default function RouterLanding() {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contactos" element={<Contacts />} />
                <Route path="/cursos" element={<Cursos />} />
                <Route path="/nosotros" element={<Nosotros />} />
                <Route path="/certificados" element={<Certificados />} />
            </Routes>
            <Footer />
        </Router>
    );
}
