import { useMemo } from "react";
import sImage from "../assets/images/success.png";
import useFetch from "../hooks/useFetch";
import Classes from "../styles/Summary.module.css";

// eslint-disable-next-line react/prop-types
export default function Summary({ score, noq }) {
    const getKeyword = useMemo(() => {
        console.log("summary");
        if ((score / (noq * 5)) * 100 < 50) {
            return "failed";
        } else if ((score / (noq * 5)) * 100 < 75) {
            return "good";
        } else if ((score / (noq * 5)) * 100 < 100) {
            return "very good";
        } else {
            return "excellent";
        }
    }, [score, noq]);

    const { result, loading, error } = useFetch(
        `https://api.pexels.com/v1/search?query=${getKeyword}&per_page=1`,
        "GET",
        {
            Authorization: import.meta.env.VITE_REACT_APP_PEXELS_API_KEY,
        }
    );

    const image = result ? result?.photos[0].src.medium : sImage;
    return (
        <div className={Classes.summary}>
            <div className={Classes.point}>
                {/* progress bar will be placed here */}
                <p className={Classes.score}>
                    Your score is <br />
                    {score} out of {noq * 5}
                </p>
            </div>

            {loading && <div className={Classes.badge}>Loading your badge</div>}

            {error && <div className={Classes.badge}>An error occured!</div>}

            {!loading && !error && (
                <div className={Classes.badge}>
                    <img src={image} alt="Success" />
                </div>
            )}
        </div>
    );
}
