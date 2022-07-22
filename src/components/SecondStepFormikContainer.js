import React from "react";
import FormikControl from "./FormikControl";
import { Formik, Form } from "formik";
import {useSelector, useDispatch} from 'react-redux';
import {batch} from 'react-redux';
import {setExperience, setOtherSports, setProfession, setSports, setGoals} from "../store/reducers/formReducer";
import {sportsOptions} from "./options/sportsOptions";
import {experienceOptions} from './options/experienceOptions'
import {professionOptions} from './options/professionOptions'
import {goalsOptions} from "./options/goalsOptions";
import {increment, decrement} from "../store/reducers/stepReducer";
import * as Yup from "yup";

function SecondStepFormikContainer() {
    const stepCount = useSelector((state) => state.step.value);
    const formValues = useSelector(state => state.form);
    const dispatch = useDispatch();

    const initialValues = {
        sports: formValues.sports,
        othersports: formValues.othersports,
        experience: formValues.experience,
        profession: formValues.profession,
        goals: formValues.goals
    }

    const validationSchema = Yup.object({
        sports: Yup.string().required('Required'),
        othersports: Yup.array().min(1, "Please Select Atleast one Value"),
        experience: Yup.string().required('Required!'),
        profession: Yup.string().required('Required!'),
        goals: Yup.array().when('sports',{
            is: "Wrestling", then: Yup.array().required('Required!'), otherwise: Yup.array().notRequired(),
        }),
    })

    const onSubmit = (values) => {
        batch(() => {
            dispatch(setSports(values.sports))
            dispatch(setOtherSports(values.othersports))
            dispatch(setExperience(values.experience))
            dispatch(setProfession(values.profession))
            dispatch(setGoals(values.goals))
        })
        dispatch(increment());
    }

    if (stepCount === 1) {
        return (<Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {(formik) => {
                const sportsValue = formik.values.sports;
                return (<Form className="row">
                        <FormikControl
                            name="sports"
                            label="What Sport Are You Most Interested In?"
                            control="select"
                            options={sportsOptions}
                            grid={12}
                        />
                        <FormikControl
                            name="othersports"
                            label="Interested Training in Other Sports?"
                            control="multiselect"
                            grif={12}
                        />
                        <FormikControl
                            name="experience"
                            label="How Many Years Have You Been Involved In Your Sport?"
                            control="select"
                            options={experienceOptions}
                            grid={12}
                        />
                        <FormikControl
                            name="profession"
                            label="Are You A Professor, Coach or Gym Owner?"
                            control="select"
                            options={professionOptions}
                            grid={12}
                        />
                        { (sportsValue === 'Wrestling' || sportsValue === 'Jiu Jitsu/Grappling') &&
                            <FormikControl
                            name="goals"
                            label="What Are Your Goals? (Select All That Apply)"
                            control="multicheckbox"
                            options={goalsOptions}
                            grid={12}
                        />
                        }
                        <div className="row">
                            {stepCount > 0 && <div className="mb-3 col-6 mt-5">
                                <button type="button" onClick={() => dispatch(decrement())}
                                        className="btn btn-dark"> Previous
                                </button>
                            </div>}
                            <div className="col-6">
                                <div className="row">
                                    <div className="mb-3 col-12 mt-5 text-end">
                                        <button type="submit" className="btn btn-dark"> Next
                                            Page
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </Form>

                )
            }

            }

        </Formik>)

    }


}

export default SecondStepFormikContainer;