import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimateElement from "../components/AnimateElement";
import NosotrosSectionTitle from "../landing.components/NosotrosSectionTitle";
import "./Contacts.css";
import {
    faFilePdf,
    faMessage,
    faWheatAlt,
} from "@fortawesome/free-solid-svg-icons";

import info from "./../mooks/nosotros.json";

export default function Contacts() {
    return (
        <AnimateElement>
            <div className="contact-page">
                <section className="section-title">
                    <br />
                    <br />
                    <br />
                    <div className="container">
                        <NosotrosSectionTitle
                            title="Nuestras redes"
                            icon={faMessage}
                            description="Nuestro equipo esta conformado por profesionales de
                    diferentes áreas y con diferentes experiencias, pero con un
                    objetivo en común: ayudar a las personas a mejorar su
                    calidad de vida a través de la educación."
                        />
                    </div>
                </section>
                <section className="section-redes">
                    <div className="container">
                        <a className="pdf" href="#">
                            <FontAwesomeIcon icon={faFilePdf} />
                        </a>
                        <a className="maiz" href="#">
                            <FontAwesomeIcon icon={faWheatAlt} />
                        </a>
                    </div>
                </section>
                <section className="section-title">
                    <div className="container">
                        {info.map((secs) => (
                            <NosotrosSectionTitle key={secs.id} {...secs} />
                        ))}
                        {/* <NosotrosSectionTitle
                            title="Nosotros"
                            icon={faClipboardUser}
                            description="Nuestro equipo esta conformado por profesionales de
                    diferentes áreas y con diferentes experiencias, pero con un
                    objetivo en común: ayudar a las personas a mejorar su
                    calidad de vida a través de la educación."
                        /> */}
                    </div>
                </section>
                <section className="section-form">
                    <div className="container">
                        <form>
                            <input
                                type="text"
                                placeholder="Nombres y Apellidos*"
                            />
                            <input
                                type="text"
                                placeholder="Numero de Celular*"
                            />
                            <input
                                type="email"
                                placeholder="Correo electronico*"
                            />
                            <textarea placeholder="Mensaje*" />
                            <button>Enviar</button>
                        </form>
                    </div>
                </section>
            </div>
        </AnimateElement>
    );
}
