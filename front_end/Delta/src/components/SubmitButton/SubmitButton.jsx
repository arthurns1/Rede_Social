import "./style.css";

export function SubmitButton(props) {
    return (
        <div className="submit-input-container">
            <input type="submit" value={props.name} className="submit-input" />
        </div>
    );
}
