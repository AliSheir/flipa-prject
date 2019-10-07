import React,{Component} from 'react';
import './numberBox.css';
import {Icon} from 'antd';

export default class NumberBox extends Component{
    render(){
        return(
            <div className='numberBox-container'>
<div className='first-box'>
<Icon style={{fontSize:'45px'}} type="clock-circle" />
<h3>its the number</h3>
<p>a new business list and sell <br /> on flippa every hourse</p>
</div>

<div className='second-box'>
<Icon type="wallet" style={{fontSize:'45px'}} />
<h3>the buyer waallet</h3>
<p>our buyer have a collective <br />purchasing power of $7bn</p>
</div>


<div className='third-box'>
<Icon style={{fontSize:'45px'}} type="carry-out" />
<h3>a verified communinty</h3>
<p>flippa now usses ID <br />verfication to ensure new buyer and seller</p>
</div>



            </div>
        )
    }
}