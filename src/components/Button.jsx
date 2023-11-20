import Classes from "../styles/Button.module.css";

// eslint-disable-next-line react/prop-types
export default function Button({ className, children }) {
    return <div className={`${Classes.button} ${className}`}>{children}</div>;
}
