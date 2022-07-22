import React, {Fragment} from "react";
import {ErrorMessage, Field} from "formik";
import Error from "../error";

function Radio(props) {
    const {label, name, grid, options, ...rest} = props
    return (<div className={`mb-3 col${-grid}`}>
        <label className="form-label"> {label} </label>
        <Field as='div' name={name} className="form-control" {...rest}>
            {(data) => {
               console.log(data)
                return options.map(option => {
                    return (<div className="form-check" key={option.label}>
                        <input type="radio"
                               id={option.label}
                               name={name}
                               value={option.value}
                               className="form-check-input"
                        />
                        <label htmlFor={option.label} className="form-check-label">{option.label}</label>
                    </div>)
                })

            }}

        </Field>
        <ErrorMessage name={name} component={Error}/>
    </div>)
}

export default Radio;