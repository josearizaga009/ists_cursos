import "./CrudTable.css";

export function CrudTable({ titles, isOpen, dataList, onRowPrint }) {
    return (
        <section
            className={"panel-crudtable-component " + (isOpen ? "open" : "")}
        >
            <div className="content_table ideatable">
                <table border="1">
                    <thead>
                        <tr>
                            {titles.map((title) => (
                                <th key={title}>{title}</th>
                            ))}
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>{dataList.map((row) => onRowPrint(row))}</tbody>
                </table>
            </div>
        </section>
    );
}

export function CrudTableTdText({ value }) {
    return (
        <td>
            <span className="td-span">{value}</span>
        </td>
    );
}

export function CrudTableTdImage({ src, alt }) {
    return (
        <td>
            <img src={src} className="td-photo" alt={alt} />
        </td>
    );
}

export function CrudTableTdFlex({ children }) {
    return (
        <td className="td-action">
            <div className="buttons-flex">{children}</div>
        </td>
    );
}
