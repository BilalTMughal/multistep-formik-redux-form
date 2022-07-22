import React from "react";
import {useSelector} from 'react-redux'

function FormikStepper() {
    const stepCount = useSelector((state) => state.step.value)
    switch (stepCount) {
        case 0:
            return (
                <div className="progress mt-3 mb-5">
                    <div className="progress-bar" role="progressbar" style={{width: `${0}%`}} aria-valuenow="0"
                         aria-valuemin="0"
                         aria-valuemax="100">

                    </div>
                </div>
            )
        case 1:
            return (
                <div className="progress mt-3 mb-5">
                    <div className="progress-bar" role="progressbar" style={{width: `${33}%`}} aria-valuenow="33"
                         aria-valuemin="0"
                         aria-valuemax="100">

                    </div>
                </div>
            )
        case 2:
            return (
                <div className="progress mt-3 mb-5">
                    <div className="progress-bar" role="progressbar" style={{width: `${66}%`}} aria-valuenow="33"
                         aria-valuemin="0"
                         aria-valuemax="100">

                    </div>
                </div>
            )
        case 3:
            return (
                <div className="progress mt-3 mb-5">
                    <div className="progress-bar" role="progressbar" style={{width: `${100}%`}} aria-valuenow="33"
                         aria-valuemin="0"
                         aria-valuemax="100">

                    </div>
                </div>
            )
    }

}

export default FormikStepper;