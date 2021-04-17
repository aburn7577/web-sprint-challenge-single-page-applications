import React from 'react'
import { useHistory } from 'react-router-dom'
import pic from '../Assets/Pizza.jpg'

export default function Homepage() {
    const history = useHistory()

    const routeToOrder = () => {
        console.log('going to order form')
        history.push('/pizza')
    }

    return (
        <div>
            <img
                className='home-image'
                src={pic}
                alt=''
            />
            <button onClick={routeToOrder}>
                Order Now!
            </button>
        </div>
    )
}