import React from "react";
import {Link} from "react-router-dom";

export default function HomePage(props) {
    return(
        <div className="homepage">
            <Link to={`/pizza`} id="order-pizza">Pizza?</Link>
        </div>
    )
}