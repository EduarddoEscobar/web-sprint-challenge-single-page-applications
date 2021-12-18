import React from "react";

import {useParams, useHistory} from "react-router-dom";

export default function Order(props) {
    const {orders} = props;
    const history = useHistory();

    const {orderID} = useParams();

    const order = orders[parseInt(orderID)];

    if(!order){
        history.push('/');
    }

    return (
        <div>
            <h1>Congratulations! The pizza is on the way</h1>
            <h2>{order.name}</h2>
            <p>You ordered a {order.size} {order.toppings.map(elem => elem)} pizza with {order.sauce} as the sauce. {order.special && <>And you asked for {order.special}</>}</p>
        </div>
    )
}