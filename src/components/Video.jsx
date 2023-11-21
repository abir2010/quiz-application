import { Link } from "react-router-dom";
import image from "../assets/images/3.jpg";
import Classes from "../styles/Video.module.css";

export default function Video() {
    return (
        <Link to="/quiz">
            <div className={Classes.video}>
                <img src={image} alt="Alt Tag" />
                <p>#23 React Hooks Bangla - React useReducer hook Bangla</p>
                <div className={Classes.qmeta}>
                    <p>10 Questions</p>
                    <p>Score : Not taken yet</p>
                </div>
            </div>
        </Link>
    );
}
