import React from "react";
import Select from "react-select";
import {ErrorMessage, Field} from "formik";
import Error from "../error";
import {otherSportsOptions} from "../options/otherSportsOptions";

function MultiSelect(props) {
    const {label, name, options,grid, ...rest} = props

    return (
        <div className={`mb-3 col${-grid}`}>
            <label htmlFor={name} className="form-label"> {label} </label>
            <Field name={name} className="form-control"
                   id={name} {...rest} >
                {(data) => {
                    const {form, field} = data;
                    const changeHandler = form.handleChange = (val)=>{
                         form.setFieldValue(
                            field.name,
                             val
                          )
                    }
                        return (<Select
                        defaultValue={data.field.value}
                        options={otherSportsOptions}
                        onChange={changeHandler}
                        isMulti/>
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={Error}/>
        </div>

    )
}

export default MultiSelect;