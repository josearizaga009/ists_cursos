import "./certificados.css";
import AnimateElement from "../components/AnimateElement";
import certificados from "./../mooks/certficados.json";
import CertificadoItem from "../landing.components/CertificadoItem";

export default function Certificados() {
    return (
        <AnimateElement className="cert-page">
            <section className="bg-menu"></section>
            <section className="search">
                <div className="container">
                    <div className="titulo">
                        <h2>CONSULTA DE CERTIFICADOS</h2>
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
                <div className="resultado">
                    <div className="n-result">
                        <h3>1 Resultado(s) de Curso</h3>
                    </div>
                    <div className="items">
                        {certificados.map((certificado) => (
                            <CertificadoItem
                                key={certificado.id}
                                {...certificado}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </AnimateElement>
    );
}
