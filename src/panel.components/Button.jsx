import "./Button.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Button({ icon, text, type = "normal", ...props }) {
    const className = props.className ?? "";
    return (
        <>
            <button
                className={`panel-button-component ${type} ${className}`}
                {...props}
            >
                <FontAwesomeIcon icon={icon} />
                <span>{text}</span>
            </button>
        </>
    );
}
