import React from "react";
import FormikControl from "./FormikControl";
import {CountryDropdown, RegionDropdown} from 'react-country-region-selector';
import {Formik, Form, ErrorMessage, Field} from "formik";
import {validationSchema} from "./ValidationSchema";
import {useSelector, useDispatch} from 'react-redux';
import {
    setFirstName,
    setMiddleName,
    setLastName,
    setEmailAddress,
    setPassword,
    setPhoneNumber,
    setCountry,
    setState,
    setAge,
    setBirthDate,
    setTermsandCondition
} from "../store/reducers/formReducer";
import {batch} from 'react-redux'
import {increment} from "../store/reducers/stepReducer";
import {ageOptions} from "./options/ageOptions";
import {termsObject} from "./options/termsObject";
import Error from "./error";
import '../App.css';

function FirstStepFormikContainer() {
    const stepCount = useSelector((state) => state.step.value);
    const formValues = useSelector(state => state.form);
    const dispatch = useDispatch();

    const initialValues = {
        firstname: formValues.firstname,
        middlename: formValues.middlename,
        lastname: formValues.lastname,
        email: formValues.email,
        password: formValues.password,
        phonenumber: formValues.phonenumber,
        country: formValues.country,
        states: formValues.states,
        age: formValues.age,
        dateofbirth: formValues.dateofbirth,
        termsandcondition: formValues.termsandcondition
    }

    const onSubmit = (values, helpers) => {
        batch(() => {
            dispatch(setFirstName(values.firstname))
            dispatch(setMiddleName(values.middlename))
            dispatch(setLastName(values.lastname))
            dispatch(setEmailAddress(values.email))
            dispatch(setPassword(values.password))
            dispatch(setPhoneNumber(values.phonenumber))
            dispatch(setCountry(values.country))
            dispatch(setState(values.states))
            dispatch(setAge(values.age))
            dispatch(setBirthDate(values.dateofbirth))
            dispatch(setTermsandCondition(values.termsandcondition))
        })
        dispatch(increment());
    }
    if (stepCount === 0) {
        return (<Formik enableReinitialize initialValues={initialValues} onSubmit={onSubmit}
                        validationSchema={validationSchema}>
            {(formik) => {
                return (<Form className="row">
                    <div className="row">
                        <FormikControl
                            type="text"
                            name="firstname"
                            label="First Name"
                            control="input"
                            grid={4}
                        />
                        <FormikControl
                            type="text"
                            name="middlename"
                            label="Middle Name"
                            control="input"
                            grid={4}
                        />
                        <FormikControl
                            type="text"
                            name="lastname"
                            label="Last Name"
                            control="input"
                            grid={4}
                        />
                        <FormikControl
                            type="email"
                            name="email"
                            label="Email Address"
                            control="input"
                            grid={12}
                        />
                        <FormikControl
                            type="password"
                            name="password"
                            label="Password"
                            control="input"
                            grid={12}
                        />

                        <FormikControl
                            type="tel"
                            name="phonenumber"
                            label="Phone Number"
                            control="input"
                            grid={12}
                        />
                        <div className="mb-3 col-12">
                            <label htmlFor="country" className="form-label"> Country </label>
                            <CountryDropdown name="country" className="form-control"
                                             value={formik.values.country}
                                             onChange={(_, e) => formik.handleChange(e)}
                                             onBlur={formik.handleBlur}
                            />
                            {formik.errors.country && <div className="error">{formik.errors.country}</div>}
                        </div>
                        {formik.values.country === 'United States' && <div className="mb-3 col-12">
                            <label htmlFor="states" className="form-label"> What State Do You
                                Live In? </label>
                            <RegionDropdown name="states" country={formik.values.country}
                                            className="form-control"
                                            value={formik.values.country === 'United States' ? formik.values.states : ""}
                                            onChange={(_, e) => formik.handleChange(e)}
                                            onBlur={formik.handleBlur}
                            />
                            <ErrorMessage name="state" component={Error}/>
                        </div>}

                        <FormikControl
                            name="age"
                            label="Are you older than 13 years of age?"
                            control="select"
                            options={ageOptions}
                            grid={12}
                        />
                        <FormikControl
                            type="date"
                            name="dateofbirth"
                            label="Date of Birth"
                            control="date"
                            grid={12}
                        />
                        <FormikControl
                            name="termsandcondition"
                            control="checkbox"
                            grid={12}
                            options={termsObject}
                        />
                    </div>
                    <div className="mb-3 col-12 text-end">
                        <button type="submit" className="btn btn-dark"> Next Page</button>
                    </div>
                </Form>)
            }

            }
        </Formik>)
    }
}

export default FirstStepFormikContainer;