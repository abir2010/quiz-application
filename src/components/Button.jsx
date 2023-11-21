import Classes from "../styles/Button.module.css";

// eslint-disable-next-line react/prop-types
export default function Button({ className, children }) {
    return (
        <button className={`${Classes.button} ${className}`}>{children}</button>
    );
}
