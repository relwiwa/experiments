import React, { useContext } from "react";
import { RadioGroupContext } from "./RadioGroup";

export const RadioField = ({
    label,
    value
}) => {
    const { name, value: currentValue, onChange } = useContext(RadioGroupContext)
    return (
        <label>
            <input
                type="radio"
                name={name}
                checked={currentValue === value ? true : false}
                value={value}
                onChange={() => onChange(value)}
            />
            <span>{label}</span>
        </label>
    )
};
