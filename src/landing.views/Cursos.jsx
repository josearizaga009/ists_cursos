import "./Cursos.css";
// import cursos from "./../mooks/cursos.json";
import CursosList from "../landing.components/CursosList";
import AnimateElement from "../components/AnimateElement";
import { useEffect, useState } from "react";
import { getCourses } from "../services/courses";

export default function Cursos() {
    const [courses, setCourses] = useState([]);

    useEffect(() => {
        getCourses().then((res) => setCourses(res));
    }, []);

    return (
        <AnimateElement fade={false}>
            <section className="cursos-page bg-menu"></section>
            <CursosList
                id="section-proximos"
                cursos={courses}
                title="Próximos"
            />
            <CursosList
                id="section-concluidos"
                cursos={courses}
                title="Concluidos"
            />
            <CursosList
                id="section-en-progreso"
                cursos={courses}
                title="En Progreso"
            />
        </AnimateElement>
    );
}
