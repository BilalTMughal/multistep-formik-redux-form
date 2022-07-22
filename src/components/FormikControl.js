import React from "react";
import Input from "./form components/Input";
import Select from "./form components/Select";
import MultiSelect from "./form components/MultiSelect";
import Radio from "./form components/Radio";
import Date from "./form components/Date";
import TextArea from "./form components/TextArea";
import ImageCropper from "./form components/ImageCropper";
import DateRangePicker from "./form components/Date";
import Checkbox from "./form components/Checkbox";
import MultiCheckbox from "./form components/MultiCheckbox";


function FormikControl(props) {
    let {control, ...rest} = props
    switch (control) {
        case'input': return <Input {...rest} />
        case 'textarea': return <TextArea {...rest} />
        case 'select': return <Select {...rest} />
        case 'multiselect' : return  <MultiSelect {...rest}/>
        case 'checkbox': return <Checkbox {...rest}/>
        case 'multicheckbox': return <MultiCheckbox {...rest}/>
        case 'radio': return <Radio {...rest}/>
        case 'date': return <DateRangePicker {...rest}/>
        case 'image': return <ImageCropper {...rest} />
        default:
            return null

    }
}

export default FormikControl;