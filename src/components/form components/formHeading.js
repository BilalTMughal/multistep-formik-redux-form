import React from 'react'
import {useSelector} from 'react-redux';

function FormHeading() {
    const stepCount = useSelector((state) => state.step.value);
    switch (stepCount) {
        case 0: return <h4> Welcome to Ocean™! </h4>
        case 1: return <h4> Information About You </h4>
        case 2: return <h4> Additional Info </h4>
    }

}

export default FormHeading;