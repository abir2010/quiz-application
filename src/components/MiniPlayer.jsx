import { useRef, useState } from "react";
import ReactPlayer from "react-player/youtube";
import Classes from "../styles/MiniPlayer.module.css";

// eslint-disable-next-line react/prop-types
export default function MiniPlayer({ title, id }) {
    const buttonRef = useRef();
    const [status, setStatus] = useState(false);

    const videoUrl = `https://www.youtube.com/watch?v=${id}`;

    function toggleMiniPlayer() {
        if (!status) {
            buttonRef.current.classList.remove(Classes.floatingBtn);
            setStatus(true);
        } else {
            buttonRef.current.classList.add(Classes.floatingBtn);
            setStatus(false);
        }
    }
    return (
        <div
            className={`${Classes.miniPlayer} ${Classes.floatingBtn}`}
            ref={buttonRef}
            onClick={toggleMiniPlayer}
        >
            <span className={`material-icons-outlined ${Classes.open}`}>
                {" "}
                play_circle_filled{" "}
            </span>
            <span
                className={`${Classes.close} material-icons-outlined`}
                onClick={toggleMiniPlayer}
            >
                {" "}
                close{" "}
            </span>
            <ReactPlayer
                className={Classes.player}
                url={videoUrl}
                width="300px"
                height="168px"
                playing={status}
                controls
            />
            <p>{title}</p>
        </div>
    );
}
