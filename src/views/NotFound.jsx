import AnimateElement from "../components/AnimateElement";
import "./NotFound.css";

export default function NotFound() {
    return (
        <AnimateElement className="notfound-page">
            <section className="bg-menu"></section>

            <div className="container">
                <div className="card">
                    <img
                        className="image"
                        src="https://www.hostingplus.pe/wp-content/uploads/2020/12/error404quees.jpg"
                        alt="Error 404"
                    />
                </div>
            </div>
        </AnimateElement>
    );
}
