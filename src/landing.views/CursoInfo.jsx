import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import AnimateElement from "../components/AnimateElement";
import "./CursoInfo.css";
import {
    faCalendarDays,
    faClock,
    faPaperPlane,
    faPen,
    faTicket,
    faUser,
} from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { showCourse } from "../services/courses";
import NotFound from "../views/NotFound";
import EquipoItem from "../landing.components/EquipoItem";
import InputForm from "../components/InputForm";
import Button from "../components/Button";
import SectionTitle from "../landing.components/SectionTitle";

export default function CursoInfo() {
    const [curso, setCurso] = useState(null);
    const { id } = useParams();
    useEffect(() => {
        showCourse({ id }).then((res) => setCurso(res));
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    if (curso == null) return "Loading";
    if (!curso) return <NotFound />;
    return (
        <AnimateElement>
            <div className="page-curso-info">
                <section className="banner">
                    <div className="curso-info-container">
                        <div className="curso-info">
                            <img src={curso.image} />
                            <div className="description">
                                <h3>{curso.name}</h3>
                                <p>{curso.description}</p>
                                <div className="datos">
                                    <div className="datos-info">
                                        <FontAwesomeIcon
                                            icon={faCalendarDays}
                                        />
                                        <span>16 de marzo 2023</span>
                                    </div>
                                    <div className="line"></div>
                                    <div className="datos-info">
                                        <FontAwesomeIcon icon={faClock} />
                                        <span>40 horas</span>
                                    </div>
                                    <div className="line"></div>
                                    <div className="datos-info">
                                        <FontAwesomeIcon icon={faUser} />
                                        <span>7 estudiantes</span>
                                    </div>
                                    <div className="line"></div>
                                    <div className="datos-info">
                                        <FontAwesomeIcon icon={faTicket} />
                                        <span>20 cupos</span>
                                    </div>
                                </div>
                                <Link to="#">Inscribirme</Link>
                                <span>Empienza en: 5D 22H 0M 0S</span>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section-team">
                    <h3>Docentes Encargados</h3>
                    <div className="container">
                        <EquipoItem
                            name="Holi"
                            rol="Profesor"
                            photo="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg/"
                            description="Muy Trabajador XD"
                            fb_url="#"
                        />
                        <EquipoItem
                            name="Holi"
                            rol="Profesor"
                            photo="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w1200/2023/10/free-images.jpg/"
                            description="Muy Trabajador XD"
                            fb_url="#"
                        />
                    </div>
                </section>
                <section className="section-title">
                    <div className="container">
                        <SectionTitle
                            icon={faPen}
                            title="Inscribete"
                            description="LLena el formularion con tus datos personales."
                        />
                    </div>
                </section>
                <section className="inscription">
                    <div className="container">
                        <form>
                            <InputForm
                                name="name"
                                labelText="Cedula"
                                placeholder="Escribe tu cedula.."
                            />
                            <InputForm
                                name="name"
                                labelText="Nombres "
                                placeholder="Escribe tus nombres.."
                            />
                            <InputForm
                                name="name"
                                labelText="Apellidos"
                                placeholder="Escribe tus apellidos.."
                            />
                            <InputForm
                                name="name"
                                labelText="Sexo "
                                placeholder="Escribe tu sexo.."
                            />
                            <InputForm
                                name="name"
                                labelText="Nivel academico"
                                placeholder="Escribe tus nombres.."
                            />
                            <InputForm
                                name="name"
                                labelText="Direccion"
                                placeholder="Escribe tu direccion.."
                            />
                            <InputForm
                                name="name"
                                labelText="Correo electronico"
                                placeholder="Escribe tu correo electronico.."
                            />
                            <InputForm
                                name="name"
                                labelText="Telefono"
                                placeholder="Escribe tu numero telefonico.."
                            />
                            <InputForm
                                name="name"
                                labelText="Celular"
                                placeholder="Escribe tu numero de celular.."
                            />
                            <InputForm
                                name="name"
                                labelText="Descripcion"
                                type="textarea"
                                placeholder="Describete.."
                            />
                            <InputForm
                                name="name"
                                labelText="Nombre/Empresa"
                                placeholder="Escribe el nombre de su empresa.."
                            />
                            <InputForm
                                name="name"
                                labelText="Direccion/Empresa"
                                placeholder="Escribe la direcion de la empresa.."
                            />
                            <InputForm
                                name="name"
                                labelText="Telefono/Empresa "
                                placeholder="Escribe el numero telefonico de la empresa.."
                            />
                            <Button text="Enviar" icon={faPaperPlane} />
                        </form>
                    </div>
                </section>
            </div>
        </AnimateElement>
    );
}
