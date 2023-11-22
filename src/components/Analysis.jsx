import Classes from "../styles/Analysis.module.css";
import Questions from "./Questions";

// eslint-disable-next-line react/prop-types
export default function Analysis({ answers }) {
    return (
        <div className={Classes.analysis}>
            <h1>Question Analysis</h1>
            <Questions answers={answers} />
        </div>
    );
}
