import React, {Fragment} from "react";
import {ErrorMessage, Field} from "formik";
import Error from "../error";

function Checkbox(props) {
    const {label, name, grid,options, ...rest} = props
    return (<div className={`mb-3 col${-grid}`}>
        <label className="form-label"> {label} </label>
        <Field as='div' name={name} className="form-control" {...rest}>
            {(data)=>{
                return options.map(option => {
                    return (<div className="form-check" key={option.label}>
                        <input className="form-check-input"
                               type="checkbox"
                               name={name}
                               value={data.field.value}
                               checked={option.value === data.field.value}
                               id={option.id}
                               onChange={(e)=>{
                                   data.form.setFieldValue(name, e.target.checked)
                               }}
                        />
                        <label htmlFor={option.id} className="form-check-label">{option.label}</label>
                    </div>)
                })
            }}
        </Field>
        <ErrorMessage name={name} component={Error}/>
    </div>)

}

export default Checkbox;