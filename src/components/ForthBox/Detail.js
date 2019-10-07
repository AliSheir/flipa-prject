import React, {Component} from 'react';
import './Detail.css';
import {Icon} from 'antd';

class Detail extends Component{
    render(){
        return(
            <div className='detail'> 

<div> <Icon className='icons-color' type="check" />  10 year experience </div>
    
    
<div>  <Icon className='icons-color' type="check" /> lowest fee for sellers </div>
  
   
<div>  <Icon className='icons-color' type="check" /> more then 250,000 business sold </div>
    
<div>  <Icon className='icons-color' type="check" /> 10 year experience </div>
   

            </div>
        )
    }
}

export default Detail;