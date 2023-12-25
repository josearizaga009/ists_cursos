import "./Cursos.css";
import cursos from "./../mooks/cursos.json";
import CursosList from "../landing.components/CursosList";
import AnimateElement from "../components/AnimateElement";

export default function Cursos() {
    return (
        <AnimateElement fade={false}>
            <section className="cursos-page bg-menu"></section>
            <CursosList cursos={cursos} title="Nuevos" />
            <CursosList cursos={cursos} title="Mas Vistos" />
            <CursosList cursos={cursos} title="Antiguos" />
        </AnimateElement>
    );
}
