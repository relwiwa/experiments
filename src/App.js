import React, { useState } from 'react';
import "./App.css";
import { RadioField, RadioGroup } from "./RadioGroup";

function App() {
    const [value, setValue] = useState(2);

    return (
        <div className="App">
            <RadioGroup>
                <RadioField
                    label="one"
                    name="testradios"
                    value={1}
                    onChange={setValue}
                    checked={value === 1 ? true : false}
                />
                <RadioField
                    label="two"
                    name="testradios"
                    value={2}
                    onChange={setValue}
                    checked={value === 2 ? true : false}
                />
                <RadioField
                    label="three"
                    name="testradios"
                    value={3}
                    onChange={setValue}
                    checked={value === 3 ? true : false}
                />
            </RadioGroup>
            <div>Current value: {value}</div>
        </div>
  );
}

export default App;
