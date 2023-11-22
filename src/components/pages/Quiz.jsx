// import _ from "lodash";
import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useReducer, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import useQuestions from "../../hooks/useQuestions";
import Answers from "../Answers";
import MiniPlayer from "../MiniPlayer";
import ProgressBar from "../ProgressBar";
import { useAuth } from "./../../contexts/AuthContext";

// initial state
const initialState = null;
// reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case "questions":
            action.value.forEach((question) => {
                question.options.forEach((option) => {
                    option.checked = false;
                });
            });
            return action.value;
        case "answer":
            // eslint-disable-next-line no-case-declarations
            const questions = structuredClone(state);
            questions[action.questionID].options[action.optionID].checked =
                action.value;
            return questions;
        default:
            return state;
    }
};

export default function Quiz() {
    const [currentQ, setCurrentQ] = useState(0);

    const { id } = useParams();
    const { questions, loading, error } = useQuestions(id);
    const history = useHistory();
    const { location } = history;
    const { state } = location;
    const { videoTitle } = state;

    const [qna, dispatch] = useReducer(reducer, initialState);

    const { currentUser } = useAuth();

    useEffect(() => {
        dispatch({
            type: "questions",
            value: questions,
        });
    }, [questions]);

    function handleAnswerChange(e, index) {
        dispatch({
            type: "answer",
            value: e.target.checked,
            questionID: currentQ,
            optionID: index,
        });
    }

    // handle when user clicks the next q button
    function nextQuestion() {
        // console.log(currentQ);
        if (currentQ <= questions.length) {
            setCurrentQ((prevQ) => prevQ + 1);
        }
    }
    // handle when user clicks the prev q button
    function prevQuestion() {
        // console.log(currentQ);
        if (currentQ >= 1 && currentQ <= questions.length) {
            setCurrentQ((prevQ) => prevQ - 1);
        }
    }
    // submit quiz
    async function submit() {
        const { uid } = currentUser;

        const db = getDatabase();
        const resultRef = ref(db, `result/${uid}`);

        await set(resultRef, {
            [id]: qna,
        });

        history.push({
            pathname: `/result/${id}`,
            state: {
                qna,
            },
        });
    }
    // calculate percentage of progress
    const percentage =
        questions.length > 0 ? ((currentQ + 1) / questions.length) * 100 : 0;

    return (
        <>
            {loading && <div>loading...</div>}
            {error && <div>There was a problem!</div>}
            {!loading && !error && qna && qna.length > 0 && (
                <>
                    <h1>{qna[currentQ].title}</h1>
                    <h4>Question can have multiple answers</h4>
                    <Answers
                        input
                        options={qna[currentQ].options}
                        handleChange={handleAnswerChange}
                    />
                    <ProgressBar
                        submit={submit}
                        next={nextQuestion}
                        prev={prevQuestion}
                        progress={percentage}
                    />
                    <MiniPlayer title={videoTitle} id={id} />
                </>
            )}
        </>
    );
}
