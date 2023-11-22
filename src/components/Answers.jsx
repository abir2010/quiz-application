import Classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

// eslint-disable-next-line react/prop-types
export default function Answers({ options = [], handleChange }) {
    return (
        <div className={Classes.answers}>
            {options.map((option, index) => (
                <Checkbox
                    key={index}
                    text={option.title}
                    value={index}
                    checked={option.checked}
                    onChange={(e) => handleChange(e, index)}
                    className={Classes.answer}
                />
            ))}
        </div>
    );
}
