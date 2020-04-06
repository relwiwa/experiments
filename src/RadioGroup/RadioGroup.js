import React from "react";

export const RadioGroupContext = React.createContext({
    value: null,
    name: null,
    onChange: null,
    disabled: false,
    invalid: false,
});

export const RadioGroup = ({
    children,
    name,
    onChange,
    value,
    disabled,
    invalid
}) => {

    return (
        <RadioGroupContext.Provider value={{ value, name, onChange, disabled, invalid }}>
            <div>{children}</div>
        </RadioGroupContext.Provider>
    )
}
