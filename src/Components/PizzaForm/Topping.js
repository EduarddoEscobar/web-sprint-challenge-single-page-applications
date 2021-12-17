import React from "react";

export default function Topping(props) {
    const {name, value, onChange, checked} = props;

    return(
        <label>
            <input
                name={name}
                value={value}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            {name}
        </label>
    )
}