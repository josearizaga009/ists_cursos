import "./certificados.css";
import AnimateElement from "../components/AnimateElement";

export default function Certificados() {
    return (
        <AnimateElement className="cert-page">
            <section className="bg-menu"></section>
            <section className="search">
                <div className="container">
                    <div className="titulo">
                        <h2>Consulta de certificados</h2>
                    </div>
                    <div className="instituciones">
                        <div className="institucion">
                            <div className="text">
                                <h3>EDUCACION CONTINUA</h3>
                                <span>IST SUCUA</span>
                            </div>
                            <div className="line"></div>
                            <img src="./img/icon.png" />
                        </div>
                        <div className="line"></div>
                        <div className="institucion">
                            <img src="./img/senecyt.png" />
                            <div className="line"></div>
                            <div className="text">
                                <h3>EDUCACION SUPERIOR</h3>
                                <span>SENECYT</span>
                            </div>
                        </div>
                    </div>
                    <div className="buscador">
                        <input type="search" placeholder="Buscar" />
                    </div>
                </div>
            </section>
        </AnimateElement>
    );
}
