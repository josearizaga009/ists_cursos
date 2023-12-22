import { Link } from "react-router-dom";
import "./CursoItem.css";

export default function CursoItem({ to, imagen, name, description }) {
    return (
        <div className="curso-item">
            <div className="img">
                <img src={imagen}></img>
            </div>
            <div className="desc">
                <h3>{name}</h3>
                <p>{description}</p>
                <Link to={to}>Detalles</Link>
            </div>
        </div>
    );
}
