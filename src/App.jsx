import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contacts from "./landing.views/Contacts";
import Home from "./landing.views/Home";
import Header from "./landing.components/Header";
import Footer from "./landing.components/Footer";
import Cursos from "./landing.views/Cursos";

function App() {
    return (
        <Router>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/contactos" element={<Contacts />} />
                    <Route path="/cursos" element={<Cursos />} />
                </Routes>
            </main>
            <Footer />
        </Router>
    );
}

export default App;
