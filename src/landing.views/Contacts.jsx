import "./Contacts.css";
import AnimateElement from "../components/AnimateElement";
import NosotrosSectionTitle from "../landing.components/SectionTitle";
import {
    faMessage,
    faNetworkWired,
    faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../landing.components/SectionTitle";

// import redes from "./../mooks/redes-sociales.json";
import SocialNetworkLink from "../landing.components/SocialNetworkLink";
import InputForm from "../components/InputForm";
import Button from "../components/Button";

export default function Contacts({ socials = [] }) {
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
                            icon={faNetworkWired}
                            description="Nuestro equipo esta conformado por profesionales de
                    diferentes áreas y con diferentes experiencias, pero con un
                    objetivo en común: ayudar a las personas a mejorar su
                    calidad de vida a través de la educación."
                        />
                    </div>
                </section>
                <section className="section-redes">
                    <div className="container">
                        {socials.map((red) => (
                            <SocialNetworkLink key={red.id} {...red} />
                        ))}
                    </div>
                </section>
                <section className="section-title">
                    <div className="container">
                        <SectionTitle
                            icon={faMessage}
                            title="Contáctanos"
                            description="Si tienes alguna pregunta o duda envianos un mensaje."
                        />
                    </div>
                </section>
                <section className="section-form">
                    <div className="container">
                        <form>
                            <InputForm
                                name="name"
                                labelText="Nombres y Apellidos"
                                placeholder="Escribe tus nombres.."
                            />
                            <InputForm
                                name="phone"
                                labelText="Numero de Celular"
                                placeholder="Escribe tu número.."
                            />
                            <InputForm
                                name="email"
                                labelText="Correo Electrónico"
                                placeholder="Escribe tu email.."
                            />
                            <InputForm
                                type="textarea"
                                name="message"
                                labelText="Mensaje"
                                placeholder="Escribe tu mensaje.."
                            />
                            <Button text="Enviar" icon={faPaperPlane} />
                        </form>
                    </div>
                </section>
            </div>
        </AnimateElement>
    );
}
