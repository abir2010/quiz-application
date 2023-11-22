import { useRef, useState } from "react";
import Classes from "../styles/ProgressBar.module.css";
import Button from "./Button";

// eslint-disable-next-line react/prop-types
export default function ProgressBar({ next, submit, prev, progress }) {
    const [tooltip, setTooltip] = useState(false);
    const tooltipRef = useRef();

    function toggoleTooltip() {
        if (tooltip) {
            setTooltip(false);
            tooltipRef.current.style.display = "none";
        } else {
            setTooltip(true);
            tooltipRef.current.style.left = `calc(${progress}% - 65px)`;
            tooltipRef.current.style.display = "block";
        }
    }
    return (
        <div className={Classes.progressBar}>
            <div onClick={prev} className={Classes.backButton}>
                <span className="material-icons-outlined"> arrow_back </span>
            </div>
            <div className={Classes.rangeArea}>
                <div className={Classes.tooltip} ref={tooltipRef}>
                    {progress}% Complete!
                </div>
                <div className={Classes.rangeBody}>
                    <div
                        className={Classes.progress}
                        style={{ width: `${progress}%` }}
                        onMouseOver={toggoleTooltip}
                        onMouseOut={toggoleTooltip}
                    ></div>
                </div>
            </div>
            <Button
                onClick={progress === 100 ? submit : next}
                className={Classes.next}
            >
                <span>
                    {progress === 100 ? "Submit Quiz" : "Next Question"}
                </span>
                <span className="material-icons-outlined"> arrow_forward </span>
            </Button>
        </div>
    );
}
