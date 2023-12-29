import "./InputForm.css";

export default function InputForm({
    name,
    labelText,
    placeholder = "",
    type = "text",
}) {
    return (
        <div className="input-form-component">
            <label htmlFor={name}>{labelText}</label>
            {type !== "textarea" ? (
                <input
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    id={name}
                />
            ) : (
                <textarea
                    name={name}
                    id={name}
                    placeholder={placeholder}
                ></textarea>
            )}
        </div>
    );
}
