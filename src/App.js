import React, { useState, useEffect } from "react";
import { Route, Link, Switch } from 'react-router-dom'
import Homepage from './components/homepage'
import Order from './components/order'
import Axios from 'axios'

const startFormValues = {
  // text inputs//
  name: '',
  special: '',
  // Dropdown
  size: '',
  // Checkbox min 4
  pepperoni: false,
  sausage: false,
  bacon: false,
  onion: false,
  extraCheese: false,
  pinapple: false,
}

const startOrders = []
const startDisabled = true


const App = () => {
  const [orders, setOrders] = useState(startOrders)
  const [formValues, setFormValues] = useState(startFormValues)
  const [disabled, setDisabled] = useState(startDisabled)

  const getOrders = () => {
    Axios.get('https://reqres.in/api/order')
      .then(res => {
        setOrders(res.data)
      })
      .catch(error => {
        console.log(error)
        console.log('get orders didnt work')
      })
  }
  const postNewOrder = newOrder => {
    Axios.post('https://reqres.in/api/order', newOrder)
      .then(res => {
        setOrders([...orders, res.data])
        setFormValues(startFormValues)
      })
      .catch(error => {
        setFormValues(startFormValues)
        console.log(error)
        console.log('postNewOrder didnt work')
      })
  }
  //Event Handlers
  const inputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value })
  }
  const formSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      special: formValues.special.trim(),
      size: formValues.size,
      toppings: ['pepperoni', 'sausage', 'bacon',
        'onion', 'extraCheese', 'pinapple'].filter(top => formValues[top])
    }
    postNewOrder(newOrder)
  }
  //side Effects
  useEffect(() => {
    getOrders()
  }, [])

  useEffect(() => {

  }, [])



  return (
    <div>
      <nav>
        <h1>Lambda Eats</h1>
        <div>
          <Link to='/'>Home</Link>
        </div>
      </nav>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/pizza'>
          <Order
            values={formValues}
            change={inputChange}
            submit={formSubmit}
          // disabled={disabled}
          // errors={formErrors}
          />
        </Route>
      </Switch>

    </div>
  );
};
export default App;
