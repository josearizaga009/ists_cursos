import "./CertificadoItem.css";
import { faFilePdf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CertificadoItem({
    nombre,
    participante,
    cedula,
    estado,
    horas,
    fecha_inicio,
    fecha_fin,
    codigo,
    pdf_url,
}) {
    return (
        <div className="item">
            <div className="numero">
                <span>1</span>
            </div>
            <div className="info">
                <table>
                    <tr>
                        <th>NOMBRE DEL CURSO:</th>
                        <td>{nombre}</td>
                    </tr>
                    <tr>
                        <th>NOMBRE DEL CURSANTE:</th>
                        <td>{participante}</td>
                    </tr>
                    <tr>
                        <th>CECULA:</th>
                        <td>{cedula}</td>
                    </tr>
                    <tr>
                        <th>ESTADO:</th>
                        <td>{estado}</td>
                    </tr>
                    <tr>
                        <th>HORAS:</th>
                        <td>{horas}</td>
                    </tr>
                    <tr>
                        <th>FECHA:</th>
                        <td>
                            Desde {fecha_inicio} Hasta {fecha_fin}
                        </td>
                    </tr>
                    <tr>
                        <th>CODIGO:</th>
                        <td>{codigo}</td>
                    </tr>
                    <tr>
                        <th>PDF:</th>
                        <td>
                            <a href={pdf_url} target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFilePdf} />
                            </a>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    );
}
