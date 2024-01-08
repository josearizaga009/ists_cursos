import CursoItem from "./CursoItem";
import "./CursosList.css";

export default function CursosList({ cursos, title, className = "", id = "" }) {
    return (
        <section id={id} className={"cursos-list " + className}>
            <div className="container">
                <h1>{title}</h1>
                <div className="cursos">
                    {cursos.map(({ id, image, description, name }) => (
                        <CursoItem
                            key={id}
                            to={"/curso/" + id}
                            imagen={image}
                            name={name}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
