import Slider from "../landing.components/Slider";
import "./Home.css";
import images from "./../mooks/images.json";
import CursosList from "./../landing.components/CursosList";
import cursos from "./../mooks/cursos.json";

export default function Home() {
    return (
        <>
            <section className="banner">
                <div className="container">
                    <div className="col">
                        <h2>La tecnologia es el futuro</h2>
                        <span>¡Y tu lo eres junto a ella!</span>
                        <p>Si puedes pensarlo, puedes programarlo</p>
                    </div>
                    <div className="col">
                        <div className="slider-container">
                            <Slider speed="1500" delay="5000" images={images} />
                        </div>
                    </div>
                </div>
            </section>

            <section className="home-page section-cursos">
                <CursosList
                    cursos={cursos}
                    title="Algunos de Nuestros Cursos"
                />
            </section>
        </>
    );
}
