import { Link, useLocation } from "react-router-dom";

export default function MenuItem({ children, to, name }) {
    const { pathname } = useLocation();
    const isLocation = (optionLocation) => {
        if (pathname == optionLocation) return "active";
        return "";
    };

    return (
        <li className={isLocation(to)}>
            <Link to={to}>{name}</Link>
            {children ? <ul className="sub_menu">{children}</ul> : ""}
        </li>
    );
}
