import "./Nosotros.css";
import AnimateElement from "../components/AnimateElement";
import EquipoItem from "../landing.components/EquipoItem";
import NosotrosSectionTitle from "../landing.components/NosotrosSectionTitle";
import info from "./../mooks/nosotros.json";

import team from "./../mooks/team.json";
import { faClipboardUser } from "@fortawesome/free-solid-svg-icons";

export default function Cursos() {
    return (
        <AnimateElement className="nosotros-page">
            <section className="section-title">
                <br />
                <br />
                <br />
                <div className="container">
                    <NosotrosSectionTitle
                        title="Nosotros"
                        icon={faClipboardUser}
                        description="Nuestro equipo esta conformado por profesionales de
                    diferentes áreas y con diferentes experiencias, pero con un
                    objetivo en común: ayudar a las personas a mejorar su
                    calidad de vida a través de la educación."
                    />
                </div>
            </section>

            <section className="section-team">
                <div className="container">
                    {team.map((people) => (
                        <EquipoItem key={people.id} {...people} />
                    ))}
                </div>
            </section>

            <section className="section-title">
                <div className="container">
                    {info.map((secs) => (
                        <NosotrosSectionTitle key={secs.id} {...secs} />
                    ))}
                </div>
            </section>

            <section className="section-concepts">
                <div className="container">
                    <div className="col">
                        <h4>MISIÓN</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Odio laboriosam sint ullam doloremque optio
                            recusandae unde at fugiat vitae amet neque suscipit
                            voluptatibus, consectetur tenetur qui quibusdam!
                            Architecto corporis eaque in dignissimos numquam
                            dolorum. Voluptatum modi, minima soluta voluptas
                            voluptate placeat. Quam laboriosam illo sapiente
                            soluta, dicta cum maiores culpa!
                        </p>
                    </div>
                    <div className="col">
                        <h4>VISIÓN</h4>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Odio laboriosam sint ullam doloremque optio
                            recusandae unde at fugiat vitae amet neque suscipit
                            voluptatibus, consectetur tenetur qui quibusdam!
                            Architecto corporis eaque in dignissimos numquam
                            dolorum. Voluptatum modi, minima soluta voluptas
                            voluptate placeat. Quam laboriosam illo sapiente
                            soluta, dicta cum maiores culpa!
                        </p>
                    </div>
                </div>
            </section>
        </AnimateElement>
    );
}
