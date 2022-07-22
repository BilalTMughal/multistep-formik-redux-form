import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import FirstStepFormikContainer from "./components/FirstStepFormikContainer";
import FormikStepper from "./components/FormikStepper";
import SecondStepFormikContainer from "./components/SecondStepFormikContainer";
import {Provider} from "react-redux";
import {store} from "./store/store";
import ThirdStepFormikContainer from "./components/ThirdStepFormikContainer";
import FormSuccess from "./components/FormSuccess";
import FormHeading from "./components/form components/formHeading";

function App() {

    return (<Provider store={store}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="card mt-5">
                        <div className="card-body">
                            <div className="col-12">
                                <FormHeading/>
                                <FormikStepper/>
                            </div>
                            <FirstStepFormikContainer/>
                            <SecondStepFormikContainer/>
                            <ThirdStepFormikContainer/>
                            <FormSuccess/>
                        </div>
                    </div>
                </div>
            </div>
        </Provider>

    );
}

export default App;
