import React from "react";
import Form from "./Form"

export default function PizzaForm(props){
    const {values, update, submit, errors, disabled} = props;

    return(
        <>
            <Form values={values} submit={submit} update={update} errors={errors} disabled={disabled}/>
        </>
        
    )
}