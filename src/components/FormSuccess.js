import React from 'react'
import {useSelector} from "react-redux";

function FormSuccess() {
    const stepCount = useSelector((state) => state.step.value);
    const formValues = useSelector(state => state.form);
    if(stepCount===3) {
        return(
            <div>
                <h3 className="text-center">Thank you, {`${formValues.firstname}!`} <a href="#">Click here to go to the Ocean™ Community.</a> </h3>
                <h5 className="text-center mt-4 mb-4"><strong>The Ocean Team </strong></h5>
                <img style={{display:'block', margin: "auto"}} src="https://app-athletesocean-com-bucket.storage.googleapis.com/wp-content/uploads/2022/04/23001840/Apple-Medium.png"/>
            </div>
        )
    }


}

export default FormSuccess;