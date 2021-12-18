import React from "react";

export default function Topping(props) {
    const {name, onChange, checked} = props;

    return(
        <label>
            <input
                name={name}
                value={name.toLowerCase()}
                type="checkbox"
                checked={checked}
                onChange={onChange}
            />
            {name}
        </label>
    )
}