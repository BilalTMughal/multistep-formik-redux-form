import React from "react";
import {Field, ErrorMessage} from "formik";
import Error from "../error";

function Input(props) {
    const {label, name, grid, ...rest} = props
    return (
            <div className={`mb-3 col${-grid}`}>
                <label htmlFor={name} className="form-label"> {label} </label>
                <Field name={name} className="form-control" autoComplete="on"
                       id={name} {...rest} />
                <ErrorMessage name={name} component={Error}/>
            </div>
    )
}

export default Input;