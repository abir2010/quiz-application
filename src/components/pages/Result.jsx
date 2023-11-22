import { useHistory, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";

export default function Result() {
    const { id } = useParams();
    const { location } = useHistory();
    const { state } = location;
    const { qna } = state;

    const { answers, loading, error } = useAnswers(id);

    function calculate() {
        let score = 0,
            cnt = qna.length;
        answers.forEach((question, index1) => {
            let correctId = [],
                checkedId = [];

            question.options.forEach((option, index2) => {
                if (option.correct) {
                    correctId.push(index2);
                }
                if (qna[index1].options[index2].checked) {
                    checkedId.push(index2);
                    option.checked = true;
                }
            });
            
            let flag = false;
            if (correctId.length === checkedId.length) {
                for (let i = 0; i < correctId.length; i++) {
                    if (correctId[i] !== checkedId[i]) {
                        flag = true;
                        break;
                    }
                }
            } else cnt--;
            if (flag) cnt--;
        });
        score = cnt * 5;

        return score;
    }

    const userScore = calculate();

    return (
        <>
            {loading && <div>loading...</div>}
            {error && <div>There was a problem!</div>}
            {answers && answers.length > 0 && (
                <>
                    <Summary score={userScore} noq={answers.length} />
                    <Analysis answers={answers} />
                </>
            )}
        </>
    );
}
