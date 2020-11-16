import React from 'react';
import {TextField}  from "@material-ui/core";
import TextError from "./TextError";
import { Field, ErrorMessage } from "formik";


const Input = props => {

    const { type, label, name, ...rest } = props;

    return (
        <div className='form-control'>
            <Field type={type}  label={label} id={name} name={name} { ...rest } as={TextField} variant='outlined'/>
            <ErrorMessage name={name} component={TextError} />
        </div>
    )
}

export default Input;