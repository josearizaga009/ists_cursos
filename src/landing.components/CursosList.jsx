import CursoItem from "./CursoItem";
import "./CursosList.css";

export default function CursosList({ cursos, title }) {
    return (
        <section className="cursos-list">
            <div className="container">
                <h1>{title}</h1>
                <div className="cursos">
                    {cursos.map(({ id, url, image_url, description, name }) => (
                        <CursoItem
                            key={id}
                            to={url}
                            imagen={image_url}
                            name={name}
                            description={description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
