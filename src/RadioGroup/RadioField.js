import React from "react";

export const RadioField = ({
    checked,
    label,
    name,
    onChange,
    value
}) => {
    return (
        <label>
            <input
                type="radio"
                name={name}
                checked={checked}
                value={value}
                onChange={() => onChange(value)}
            />
            <span>{label}</span>
        </label>
    )
};
