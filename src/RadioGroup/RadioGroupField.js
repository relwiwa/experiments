import React from "react";
import { RadioGroup } from "./RadioGroup";
import styles from "./RadioGroupField.module.css";

export const RadioGroupField = ({ legend, error, ...radioGroupProps }) => {
    return (
        <fieldset>
            <legend>{legend}</legend>
            <RadioGroup
                invalid={error ? true : false}
                {...radioGroupProps}
            />
            {error && <div className={styles.error}>{error}</div>}
        </fieldset>
    )
};
