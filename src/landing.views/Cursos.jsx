import "./Cursos.css";
import cursos from "./../mooks/cursos.json";
import CursosList from "../landing.components/CursosList";

export default function Cursos() {
    return (
        <>
            <section className="cursos-page bg-menu"></section>
            <CursosList cursos={cursos} title="Nuevos" />
            <CursosList cursos={cursos} title="Mas Vistos" />
            <CursosList cursos={cursos} title="Antiguos" />
        </>
    );
}
