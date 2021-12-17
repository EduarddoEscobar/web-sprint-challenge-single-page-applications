import React from "react";
import Topping from "./Topping";

export default function Form(props){
    const {values, update, submit, errors, disabled} = props;

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
                <p>{errors.name}</p>
            </div>

            <div className="form-group">
                <h3>Choice of Size:</h3>
                <p>Required</p>
                <select name="size" onChange={onChange} id="size-dropdown">
                    <option value="">Select</option>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                    <option value="XL">XL</option>
                </select>
                <p>{errors.size}</p>
            </div>

            <div className="form-group">
                <h3>Choice of Sauce:</h3>
                <p>Required</p>
                <label>
                    <input 
                        name="sauce"
                        value='original red'
                        type="radio"
                        onChange={onChange}
                    />
                    Original Red
                </label>
                <label>
                    <input 
                        name="sauce"
                        value='garlic ranch'
                        type="radio"
                        onChange={onChange}
                    />
                    Garlic Ranch
                </label>
                <label>
                    <input 
                        name="sauce"
                        value='bbq sauce'
                        type="radio"
                        onChange={onChange}
                    />
                    BBQ Sauce
                </label>
                <label>
                    <input 
                        name="sauce"
                        value='spinach alfredo'
                        type="radio"
                        onChange={onChange}
                    />
                    Spinach Alfredo
                </label>
                <p>{errors.sauce}</p>
            </div>

            <div className="form-group checkboxes">
                <h3>Add Toppings</h3>
                <p>Choose up to 10</p>
                <Topping
                        name="pepperoni"
                        value="pepperoni"
                        checked={values.pepperoni}
                        onChange={onChange}
                />
                <Topping
                        name="bacon"
                        value="bacon"
                        checked={values.bacon}
                        onChange={onChange}
                />
                <Topping
                        name="sausage"
                        value="sausage"
                        checked={values.sausage}
                        onChange={onChange}
                />
                <Topping
                        name="meatballs"
                        value="meatballs"
                        checked={values.meatballs}
                        onChange={onChange}
                />
                <p>{errors.toppings}</p>
            </div>

            <div className="form-group">
                <h3>Special instructions</h3>
                <input id="special-text"
                    name="special"
                    value={values.special}
                    type="text"
                    onChange={onChange}
                />
                <p>{errors.special}</p>
            </div>

            <button disabled={disabled} id="order-button">Add to Order</button>
        </form>
    )
}