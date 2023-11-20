import Classes from "../styles/Button.module.css";

// eslint-disable-next-line react/prop-types
export default function Button({ children }) {
    return (
        <div className={Classes.button}>
            <span>{children}</span>
        </div>
    );
}
