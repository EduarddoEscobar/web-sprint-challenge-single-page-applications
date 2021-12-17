import React, {useState, useEffect} from "react";
import axios from "axios";
import {Route, Switch} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import PizzaForm from "./Components/PizzaForm/PizzaForm"

const App = () => {

  const initialFormValues = {name:'', size:'', sauce:'', pepperoni: false, sausage: false, bacon: false, meatballs: false};
  const initialErrorValues = {name:'', size:'', sauce:'', toppings:''};
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrorValues);
  const [orders, setOrders] = useState([]);

  const update = (name, value) => {
    setFormValues({ ...initialFormValues, [name]: value });
  }

  const postPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza).then(resp => {
      console.log(resp.data);
      setOrders([resp.data, ...orders]);
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues));
  }

  const submit = () => {
    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'sausage', 'bacon', 'meatballs'].filter(topping => !!formValues[topping]),
    }
    postPizza(newPizza);
  }

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>

      <Switch>
        <Route path="/pizza/:pizzaID">

        </Route>
        <Route path="/pizza">
          <PizzaForm values={formValues} update={update} submit={submit} errors={errors}/>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
