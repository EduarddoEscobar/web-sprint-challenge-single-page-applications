import React, {useState, useEffect} from "react";
import axios from "axios";
import * as yup from "yup";
import pizzaSchema from './Validation/pizzaSchema';
import {Route, Switch, useHistory, Link} from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import PizzaForm from "./Components/PizzaForm/PizzaForm";
import Order from "./Components/OrderConfirmation/Order";

const App = () => {

  const initialFormValues = {name:'', size:'', sauce:'', pepperoni: false, sausage: false, bacon: false, meatballs: false, special:''};
  const initialErrorValues = {name:'', size:'', sauce:'', toppings:'', special:''};
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState(initialErrorValues);
  const [orders, setOrders] = useState([]);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const validate = (name, value) => {
    yup.reach(pizzaSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: ''}))
      .catch(error => setErrors({...errors, [name]: error.errors[0]}))
  }

  const update = (name, value) => {
    validate(name, value);
    setFormValues({ ...formValues, [name]: value });
  }

  const postPizza = newPizza => {
    axios.post('https://reqres.in/api/orders', newPizza).then(resp => {
      setOrders([resp.data, ...orders]);
      history.push(`/pizza/${orders.length}`);
    }).catch(err => console.error(err))
    .finally(() => setFormValues(initialFormValues));
  }

  const submit = () => {
    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      sauce: formValues.sauce,
      toppings: ['pepperoni', 'sausage', 'bacon', 'meatballs'].filter(topping => !!formValues[topping]),
      special: formValues.special
    }
    postPizza(newPizza);
  }

  useEffect(() => {
    pizzaSchema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to={'/'}>Home</Link>
          <Link to={`/pizza`}>Order</Link>
        </nav>
      </header>

      <Switch>
        <Route path="/pizza/:orderID">
          <Order orders={orders} />
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
