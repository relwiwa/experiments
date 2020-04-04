import React from "react";

export const RadioGroupContext = React.createContext({
    value: null,
    name: null,
    onChange: null
});

export const RadioGroup = ({
    children,
    name,
    onChange,
    value
}) => {

    return (
        <RadioGroupContext.Provider value={{ value, name, onChange }}>
            <div>{children}</div>
        </RadioGroupContext.Provider>
    )
}
