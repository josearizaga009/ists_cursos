import "./Cursos.css";
import cursos from "./../mooks/cursos.json";
import CursosList from "../landing.components/CursosList";
import AnimateElement from "../components/AnimateElement";

export default function Cursos() {
    return (
        <AnimateElement fade={false}>
            <section className="cursos-page bg-menu"></section>
            <CursosList
                id="section-proximos"
                cursos={cursos}
                title="Próximos"
            />
            <CursosList
                id="section-concluidos"
                cursos={cursos}
                title="Concluidos"
            />
            <CursosList
                id="section-en-progreso"
                cursos={cursos}
                title="En Progreso"
            />
        </AnimateElement>
    );
}
