import { Fragment } from "react";
import Classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

// eslint-disable-next-line react/prop-types
export default function Answers({ options = [], handleChange, input }) {
    return (
        <div className={Classes.answers}>
            {options.map((option, index) => (
                <Fragment key={index}>
                    {input ? (
                        <Checkbox
                            key={index}
                            text={option.title}
                            value={index}
                            checked={option.checked}
                            onChange={(e) => handleChange(e, index)}
                            className={Classes.answer}
                        />
                    ) : (
                        <Checkbox
                            key={index}
                            text={option.title}
                            defaultChecked={option.checked}
                            onChange={(e) => handleChange(e, index)}
                            disabled
                            className={`${Classes.answer} ${
                                option.correct
                                    ? Classes.correct
                                    : option.checked
                                    ? Classes.wrong
                                    : null
                            }`}
                        />
                    )}
                </Fragment>
            ))}
        </div>
    );
}
