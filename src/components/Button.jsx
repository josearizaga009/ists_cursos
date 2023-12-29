import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ icon, text, type = 1 }) {
    let className = type == 1 ? "primary" : "";
    className = type == 2 ? "secondary" : className;
    className = type == 3 ? "tertiary" : className;
    return (
        <button className={"button-component button-type-" + className}>
            <span>{text}</span>
            <FontAwesomeIcon icon={icon} />
        </button>
    );
}
