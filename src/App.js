import React, { useState } from 'react';
import "./App.css";
import { RadioField, RadioGroup } from "./RadioGroup";

function App() {
    const [value, setValue] = useState(2);

    return (
        <div className="App">
            <RadioGroup value={value} onChange={setValue} name="testradios" >
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
            </RadioGroup>
            <div>Current value: {value}</div>
        </div>
  );
}

export default App;
