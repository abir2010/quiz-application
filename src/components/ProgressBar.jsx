import Classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function ProgressBar({ next, submit, prev, progress }) {
    return (
        <div className={Classes.progressBar}>
            <div onClick={prev} className={Classes.backButton}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={Classes.rangeArea}>
                <div className={Classes.tooltip}>{progress}% Complete!</div>
                <div className={Classes.rangeBody}>
                    <div
                        className={Classes.progress}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
            <Button
                onClick={progress === 100 ? submit : next}
                className={Classes.next}
            >
                <span>Next Question</span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
}
