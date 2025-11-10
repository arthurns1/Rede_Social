import "./style.css";

export function TextField(props) {
    return (
        <div className="text-field">
            <label htmlFor={"i" + props.name}>{props.name}</label>
            <input
                type={props.type}
                name={props.name}
                id={"i" + props.name}
                placeholder={props.placeholder}
                className="text-input"
            />
        </div>
    );
}
