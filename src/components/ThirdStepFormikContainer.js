import React from 'react';
import FormikControl from "./FormikControl";
import {Formik, Form} from "formik";
import {useSelector, useDispatch, batch} from 'react-redux';
import * as Yup from 'yup';
import {increment, decrement} from "../store/reducers/stepReducer";
import {setAboutYou, setProfilePicture} from "../store/reducers/formReducer";
import axios from "axios";

function ThirdStepFormikContainer() {
    const stepCount = useSelector((state) => state.step.value);
    const formValues = useSelector(state => state.form);
    const dispatch = useDispatch();
    let formdata;

    const initialValues = {
        aboutyou: formValues.aboutyou,
        profile: formValues.profile
    }

    const validationSchema = Yup.object({
        aboutyou: Yup.string(),
        profile: Yup.mixed().required('File is required'),
    })

    function setFormValuesState(values) {
        batch(() => {
            dispatch(setAboutYou(values.aboutyou))
            dispatch(setProfilePicture(values.profile))
        })
    }
    function buildFormData(formData, formValues, parentKey) {
        if (formValues && typeof formValues === 'object' && !(formValues instanceof Date) && !(formValues instanceof File)) {
            Object.keys(formValues).forEach(key => {
                buildFormData(formData, formValues[key], parentKey ? `${parentKey}[${key}]` : key);
            });
        } else {
            const value = formValues == null ? '' : formValues;
            formData.append(parentKey, value);
        }

    }
    function jsonToFormData(formValues) {
        const formData = new FormData();
        buildFormData(formData, formValues);
        return formData;
    }


    const onSubmit = (values) => {
        setFormValuesState(values)
        formdata= jsonToFormData({...formValues, ...values});
        axios.post("https://fugunation.com", formdata).then(() => {
        }).catch(() => {
            // dispatch(increment())
        })
    }

    if (stepCount === 2) {
        return (
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                {(formik) => {
                    return (<Form className="row">
                            <FormikControl
                                name="aboutyou"
                                label="What Else Should We Know About You?"
                                control="textarea"
                                grid={12}
                            />
                            <FormikControl
                                name="profile"
                                control="image"
                                grid={12}
                            />

                            <div className="row">
                                {stepCount > 0 && <div className="mb-3 col-6 mt-5">
                                    <button type="button" onClick={() => dispatch(decrement())}
                                            className="btn btn-dark"> Previous
                                    </button>
                                </div>}
                                <div className="col-6">
                                    <div className="row">
                                        <div className="mb-3 col-12 mt-5 text-end">
                                            <button type="submit" className="btn btn-dark"> Sumbit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Form>

                    )
                }

                }
            </Formik>
        )
    }

}

export default ThirdStepFormikContainer