import React from 'react';
import {ErrorMessage, Field} from "formik";
import Error from "../error";

function MultiCheckbox(props) {
    const {label, grid, name, options, ...rest} = props
    return (<div className={`mb-3 col${-grid}`}>
        <label className="form-label"> {label} </label>
        <Field as='div' name={name} className="form-control" {...rest}>
            {(data) => {
                return options.map(option => {
                    return (<div className="form-check" key={option.label}>
                        <input type="checkbox"
                               id={option.label}
                               name={name}
                               {...data.field}
                               value={option.value}
                               checked={data.field.value.includes(option.value)}
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

export default MultiCheckbox;