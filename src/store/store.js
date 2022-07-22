import {configureStore} from "@reduxjs/toolkit";
import sliceReducer from "./reducers/stepReducer"
import formReducer from "./reducers/formReducer";

export const store = configureStore({
    reducer: {
        step: sliceReducer,
        form: formReducer,
    },
})