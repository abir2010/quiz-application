import { Link } from "react-router-dom";
import Classes from "../styles/Video.module.css";

// eslint-disable-next-line react/prop-types
export default function Video({ title, id, noq }) {
    return (
        <Link to={noq ? `/quiz/${id}` : "/"}>
            <div className={Classes.video}>
                <img
                    src={`http://img.youtube.com/vi/${id}/maxresdefault.jpg`}
                    alt={title}
                />
                <p>{title}</p>
                <div className={Classes.qmeta}>
                    <p>{noq} Questions</p>
                    <p>Total points : {noq * 5}</p>
                </div>
            </div>
        </Link>
    );
}
