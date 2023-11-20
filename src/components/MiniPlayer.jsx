import image from "../assets/images/3.jpg";
import Classes from "../styles/MiniPlayer.module.css";

export default function MiniPlayer() {
    return (
        <div className={`${Classes.miniPlayer} ${Classes.floatingBtn}`}>
            <span className={`${Classes.open} material-icons-outlined`}>
                {" "}
                play_circle_filled{" "}
            </span>
            <span className={`${Classes.close} material-icons-outlined`}>
                {" "}
                close{" "}
            </span>
            <img src={image} alt="Alt Tag" />
            <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
        </div>
    );
}
