import "./SocialNetworkLink.css";

export default function SocialNetworkLink({ id, url, icono, color, ...props }) {
    const className = props.className ?? "";
    return (
        <a
            key={id}
            href={url}
            target="_blank"
            rel="noreferrer"
            className={"social-network-link-component " + className}
            {...props}
        >
            <div
                className="container-icon"
                dangerouslySetInnerHTML={{
                    __html: icono,
                }}
                style={{ fill: color }}
            />
        </a>
    );
}
