import React, { useState } from 'react';
import "./App.css";
import { RadioField, RadioGroupField } from "./RadioGroup";
import { FormExample } from "./FinalForm/FormExample";

function App() {
    const [value, setValue] = useState(2);

    return (
        <div className="App">
            <FormExample/>
            <hr />
            <RadioGroupField
                value={value}
                onChange={setValue}
                name="testradios"
                legend="Test Radios"
                error="An error occurred"
            >
                <RadioField
                    label="one"
                    value={1}
                />
                <RadioField
                    label="two"
                    value={2}
                />
                <RadioField
                    label="three"
                    value={3}
                />
            </RadioGroupField>
            <div>Current value: {value}</div>
        </div>
  );
}

export default App;
