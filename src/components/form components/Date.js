import React, {Fragment, useState} from "react";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import {Field, ErrorMessage} from "formik";
import Error from "../error";
import format from "date-fns/format";
import getYear from "date-fns/getYear";
import getMonth from "date-fns/getMonth";
import range from "lodash/range";

function DateRangePicker(props) {
    const date = new Date();
    const [startDate, setStartDate] = useState(date);
    const years = range(1990, getYear(new Date()) + 1, 1);
    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const {label, name, grid, ...rest} = props
    return (
        <div className={`mb-3 col${-grid}`}>
            <label htmlFor={name} className="form-label"> {label} </label>
            <Field name={name} className="form-control">
                {({form, field}) => {
                    const {setFieldValue} = form
                    return (
                        <DatePicker
                            className="form-control"
                            id={name}
                            {...field}
                            {...rest}
                            renderCustomHeader={({
                                                     date,
                                                     changeYear,
                                                     changeMonth,
                                                     decreaseMonth,
                                                     increaseMonth,
                                                     prevMonthButtonDisabled,
                                                     nextMonthButtonDisabled,
                                                 }) => (
                                <div
                                    style={{
                                        margin: 10,
                                        display: "flex",
                                        justifyContent: "center",
                                    }}
                                >
                                    <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
                                        {"<"}
                                    </button>
                                    <select
                                        value={getYear(date)}
                                        onChange={({target: {value}}) => changeYear(value)}
                                    >
                                        {years.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>

                                    <select
                                        value={months[getMonth(date)]}
                                        onChange={({target: {value}}) =>
                                            changeMonth(months.indexOf(value))
                                        }
                                    >
                                        {months.map((option) => (
                                            <option key={option} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>

                                    <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
                                        {">"}
                                    </button>
                                </div>
                            )}
                            selected={startDate}
                            onChange={(date) =>{
                                setStartDate(date)
                                let d = format(date, "MM/dd/yyyy")
                                return (
                                    setFieldValue(name, d)
                                )
                            }
                            }
                            // onChange={(val) => {
                            //     let d = format(val, "MM/dd/yyyy")
                            //     return (
                            //         setFieldValue(name, d)
                            //     )
                            // }
                            //
                            // }
                        />
                    )
                }}
            </Field>
            <ErrorMessage name={name} component={Error}/>
        </div>)
}

export default DateRangePicker