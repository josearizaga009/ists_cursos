import "./CrudProgress.css";

export default function CrudProgress({ isOpen }) {
    return (
        <section
            className={"panel-crudprogress-component " + (isOpen ? "open" : "")}
        >
            <div className="modal-progress">
                <span id="sectionProgressText">Procesando..</span>
                <div className="progress_bar"></div>
            </div>
        </section>
    );
}
