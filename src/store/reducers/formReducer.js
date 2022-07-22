import {createSlice} from '@reduxjs/toolkit'
import format from "date-fns/format";

const initialState = {
    firstname: "",
    middlename: "",
    lastname: "",
    email: '',
    password: "",
    phonenumber: "",
    country: '',
    states: "",
    age: "",
    dateofbirth: '',
    termsandcondition: '',
    sports: "",
    othersports: [],
    experience: "",
    profession: '',
    goals: [],
    aboutyou: '',
    profile: ''
}

export const formReducer = createSlice({
    name: 'form',
    initialState,
    reducers: {
        setFirstName: (state, action) => {
            state.firstname = action.payload
        },
        setMiddleName: (state, action) => {
            state.middlename = action.payload
        },
        setLastName: (state, action) => {
            state.lastname = action.payload
        },
        setEmailAddress: (state, action) => {
            state.email = action.payload
        },
        setPassword: (state, action) => {
            state.password = action.payload
        },
        setPhoneNumber: (state, action) => {
            state.phonenumber = action.payload
        },
        setCountry: (state, action) => {
            state.country = action.payload
        },
        setState: (state, action) => {
            state.states = action.payload
        },
        setAge: (state, action) => {
            state.age = action.payload
        },
        setBirthDate: (state, action) => {
            state.dateofbirth = action.payload
        },
        setTermsandCondition: (state, action) => {
                state.termsandcondition = action.payload
            },
        setOtherSports: (state, action) => {
            state.othersports = action.payload
        },
        setSports: (state, action) => {
            state.sports = action.payload
        },
        setExperience: (state, action) => {
            state.experience = action.payload
        },
        setProfession: (state, action) => {
            state.profession = action.payload
        },
        setGoals: (state, action) => {
            state.goals = action.payload
        },
        setAboutYou: (state, action) => {
            state.aboutyou = action.payload
        },
        setProfilePicture: (state, action) => {
            state.profile = action.payload
        },
    },
})

export const {
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
    setTermsandCondition,
    setSports,
    setOtherSports,
    setExperience,
    setProfession,
    setGoals,
    setAboutYou,
    setProfilePicture
} = formReducer.actions

export default formReducer.reducer