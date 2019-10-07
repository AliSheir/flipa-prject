import React from 'react';
import './Gurrentee.css';
import image from './ad.jpg';

export default class Gurentee extends React.Component{
    render(){
        return(
            <div className='gurentee-container'>
<div> <img className='image' src={image} alt=""/> </div>
<div> <h3>Pricing Gurrentee.Less When Sell With Us</h3></div>
<div>
    <button className='btn'> Learn More </button>
</div>
            </div>
        )
    }
}