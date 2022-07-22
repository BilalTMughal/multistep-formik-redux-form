import * as Yup from "yup";

export const validationSchema = Yup.object({
    firstname: Yup.string().required('First Name is Required!'),
    middlename: Yup.string(),
    lastname: Yup.string().required('Last Name is Required!'),
    email: Yup.string().email('Invalid email').required('Email Address is Required!'),
    password: Yup.string().required('No Password Provided!').min(8, 'Password is too short - should be 8 chars minimum.').matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    phonenumber: Yup.string().required('Phone Number is Required!'),
    country: Yup.string().required('Country is Required!'),
    states: Yup.string().when('country', {
        is: "United States", then: Yup.string().required('Required!'), otherwise: Yup.string().notRequired(),
    }),
    age: Yup.string().required('No Option Is Selected'),
    dateofbirth: Yup.string().required('Date of Birth is Required!'),
    termsandcondition: Yup.boolean()
        .required("The terms and conditions must be accepted.")
        .oneOf([true], "The terms and conditions must be accepted.")
});