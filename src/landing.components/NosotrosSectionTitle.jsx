import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NosotrosSectionTitle.css";
import { faUsers } from "@fortawesome/free-solid-svg-icons";

export default function NosotrosSectionTitle() {
    return (
        <>
            <div className="nosotros-item">
                <FontAwesomeIcon icon={faUsers} />
                <h2>Equipo de Trabajo</h2>
                <p>
                    Nuestro equipo esta conformado por profesionales de
                    diferentes áreas y con diferentes experiencias, pero con un
                    objetivo en común: ayudar a las personas a mejorar su
                    calidad de vida a través de la educación.
                </p>
            </div>
        </>
    );
}
