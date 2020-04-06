import React, { useContext } from "react";
import { RadioGroupContext } from "./RadioGroup";
import styles from "./RadioField.module.css";

export const RadioField = ({
    label,
    value
}) => {
    const { name, value: currentValue, onChange, disabled, invalid } = useContext(RadioGroupContext)
    return (
        <label className={invalid ? styles.invalid : undefined}>
            <input
                type="radio"
                name={name}
                disabled={disabled}
                invalid={invalid}
                checked={currentValue === value ? true : false}
                value={value}
                onChange={() => onChange(value)}
            />
            <span>{label}</span>
        </label>
    )
};
