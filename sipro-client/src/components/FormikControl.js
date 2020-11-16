import React from 'react';
import RadioButtons from "./form-elements/RadioButtons";
import Input from './form-elements/Input';


const FormikControl = props => {
    const { control, ...rest } = props;
    switch (control) {
        case 'input':
            return <Input {...rest} />;
        case 'radio':
            return <RadioButtons {...rest} />;
        default:
    }
    return (
        <div>

        </div>
    );
};

export default FormikControl;