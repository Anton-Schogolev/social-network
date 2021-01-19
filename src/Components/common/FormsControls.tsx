import React, {InputHTMLAttributes} from "react";
import {WrappedFieldProps} from "redux-form/lib/Field";
import s from "./FormsControls.module.css"


export const FormsInput = ({meta, input, ...restProps}: WrappedFieldProps & InputHTMLAttributes<HTMLInputElement>) => {
    return <>
        <input {...input} {...restProps}/>
        {meta.touched && meta.error && <span className={s.errorSpan}>{meta.error} </span>}
    </>
}