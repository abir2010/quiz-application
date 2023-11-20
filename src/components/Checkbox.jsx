// eslint-disable-next-line react/prop-types
export default function Checkbox({ text, rest }) {
    return (
        <label>
            <input type="checkbox" {...rest} />
            <span> {text}</span>
        </label>
    );
}
