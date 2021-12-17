import React, {useState, useEffect} from "react";
import axios from "axios";
import * as yup from "yup";
import pizzaSchema from './Validation/pizzaSchema';
import {Route, Switch} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import PizzaForm from "./Components/PizzaForm/PizzaForm"

const App = () => {

  const initialFormValues = {name:'', size:'', sauce:'', pepperoni: false, sausage: false, bacon: false, meatballs: false};
  const initialErrorValues = {name:'', size:'', sauce:'', toppings:''};
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrorValues);
  const [orders, setOrders] = useState([]);
  const [disabled, setDisabled] = useState(true);

  const validate = (name, value) => {
    yup.reach(pizzaSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: ''}))
      .catch(error => setErrors({...errors, [name]: error.errors[0]}))
  }

  const update = (name, value) => {
    validate(name, value);
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

  useEffect(() => {
    pizzaSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>

      <Switch>
        <Route path="/pizza/:pizzaID">

        </Route>
        <Route path="/pizza">
          <PizzaForm values={formValues} update={update} submit={submit} errors={errors} disabled={disabled}/>
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </>
  );
};
export default App;
