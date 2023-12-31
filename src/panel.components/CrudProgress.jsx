import "./CrudProgress.css";

export default function CrudProgress({ isOpen, text }) {
    return (
        <section
            className={"panel-crudprogress-component " + (isOpen ? "open" : "")}
        >
            <div className="modal-progress">
                <span id="sectionProgressText">{text}..</span>
                <div className="progress_bar"></div>
            </div>
        </section>
    );
}
