import "./EquipoItem.css";

export default function EquipoItem({ name, rol, description, photo, fb_url }) {
    return (
        <a href={fb_url} target="_blank" rel="noreferrer" className="item">
            <img src={photo}></img>
            <h3>{name}</h3>
            <span>{rol}</span>
            <p>{description}</p>
        </a>
    );
}
