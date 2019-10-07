import React, {Component} from 'react';
import './Box.css';
import {Icon} from 'antd';

class Boxes extends Component{
    render(){
        return(
            <div className='container'>

                <div className='learn-more'>
<p><Icon className='zz' type="safety-certificate" />   Pricing Gurrentti <button className='a'>Learn More <Icon type="arrow-right" /></button></p>
                </div>
                <div className='learn-more'>
<p> <Icon  className='zzz' type="play-circle" />Pricing Gurrentti <button className='a'>Learn More <Icon type="arrow-right" /></button></p>
                </div>
</div>
        )
    }
}


export default Boxes;