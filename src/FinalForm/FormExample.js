import React, { useState } from "react";
import { Field, Form } from "react-final-form";

export const FormExample = () => {
    const [formValues, setFormValues] = useState(null);

    const handleSubmit = (values) => {
        setFormValues(values);
    }

    const validateText = (value) => {
        let error;
        if (value === "abc") {
            error = "Do not enter abc";
        }
        return error;
    }

    const globalValidate = (values) => {
        let errors = {};
        if (values["testcheckboxes"].indexOf("second") >= 0) {
            errors["testcheckboxes"] = "Second must not be chosen";
        }
        if (values["testradios"] === "two") {
            errors["testradios"] = "Two must not be chosen";
        }
        return errors;
    }

    return (
        <>
            <Form
                onSubmit={handleSubmit}
                validate={globalValidate}
                initialValues={{
                    testtext: "abc",
                    testcheckboxes: []
                }}
                render={
                    ({ handleSubmit, errors }) => {
                        return (
                            <form onSubmit={handleSubmit}>
                                <Field
                                    name="testtext"
                                    validate={validateText}
                                    render={({ input, meta }) => (
                                        <div>
                                            <input
                                                type="text"
                                                {...input}
                                            />
                                            {meta.touched && meta.error && <span>{meta.error}</span>}
                                        </div>
                                    )}
                                />
                                <div>
                                    <label>
                                        <Field
                                            name="testcheckboxes"
                                            component="input"
                                            value="first"
                                            type="checkbox"
                                        />
                                        <span>First</span>
                                    </label>
                                    <label>
                                        <Field
                                            name="testcheckboxes"
                                            component="input"
                                            value="second"
                                            type="checkbox"
                                        />
                                        <span>Second</span>
                                    </label>
                                    <label>
                                        <Field
                                            name="testcheckboxes"
                                            component="input"
                                            value="third"
                                            type="checkbox"
                                        />
                                        <span>Third</span>
                                    </label>
                                </div>
                                {errors["testcheckboxes"] && <div>{errors["testcheckboxes"]}</div>}
                                <div>
                                    <label>
                                        <Field
                                            name="testradios"
                                            component="input"
                                            value="one"
                                            type="radio"
                                        />
                                        <span>One</span>
                                    </label>
                                    <label>
                                        <Field
                                            name="testradios"
                                            component="input"
                                            value="two"
                                            type="radio"
                                        />
                                        <span>Two</span>
                                    </label>
                                    <label>
                                        <Field
                                            name="testradios"
                                            component="input"
                                            value="three"
                                            type="radio"
                                        />
                                        <span>Three</span>
                                    </label>
                                    {errors["testradios"] && <div>{errors["testradios"]}</div>}
                                </div>
                                <button type="submit">Submit</button>
                            </form>
                        )
                    }}
            />
            <div>Values: {formValues !== null ? JSON.stringify(formValues) : "-"}</div>
        </>
    )
};
