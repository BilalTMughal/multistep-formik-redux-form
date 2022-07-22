import React from "react";
import {ErrorMessage, Field} from "formik";
import Error from "../error";

function Select(props) {
    const {label, name, grid, options, ...rest} = props
    return (
        <div className={`mb-3 col${-grid}`}>
            <label htmlFor={name} className="form-label"> {label} </label>
            <Field as="select" name={name} className="form-control"
                   id={name} {...rest} >
                <option key='Select An Option' value='' disabled>Select An Option</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>{option.value}</option>
                ))}
            </Field>
            <ErrorMessage name={name} component={Error}/>
        </div>
    )


}

export default Select