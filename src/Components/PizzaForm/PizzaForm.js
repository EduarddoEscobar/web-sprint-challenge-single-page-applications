import React from "react";

export default function PizzaForm(props){
    const {values, update, submit, errors} = props;

    const onChange = (event) => {
        const {value, name, type, checked} = event.target;
        const valueToUse = type === "checkbox" ? checked : value;
        update(name, valueToUse);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        submit();
    }

    return(
        <>
            <form id="pizza-form" onSubmit={onSubmit}>
                <div className="form-group">
                    <h3>Name of Order: </h3>
                    <input 
                        id="name-input"
                        name="name"
                        value={values.name}
                        type="text"
                        onChange={onChange}
                    />
                </div>

                <div className="form-group">
                    <h3>Choice of Size:</h3>
                    <p>Required</p>
                    <select name="size" onChange={onChange}>
                        <option value="">Select</option>
                        <option value="small">Small</option>
                        <option value="medium">Medium</option>
                        <option value="large">Large</option>
                        <option value="xl">XL</option>
                    </select>
                </div>

                <div className="form-group">
                    <h3>Choice of Sauce:</h3>
                    <p>Required</p>
                    <input 
                        name="sauce"
                        value='original red'
                        type="radio"
                        onChange={onChange}
                    />
                    <input 
                        name="sauce"
                        value='garlic ranch'
                        type="radio"
                        onChange={onChange}
                    />
                    <input 
                        name="sauce"
                        value='bbq sauce'
                        type="radio"
                        onChange={onChange}
                    />
                    <input 
                        name="sauce"
                        value='spinach alfredo'
                        type="radio"
                        onChange={onChange}
                    />
                </div>

                <div className="form-group checkboxes">
                    <h3>Add Toppings</h3>
                    <p>Choose up to 10</p>
                    <input
                        name="pepperoni"
                        value="pepperoni"
                        type="checkbox"
                        checked={values.pepperoni}
                        onChange={onChange}
                    />
                </div>
            </form>
        </>
        
    )
}