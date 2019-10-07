import React,{Component} from 'react';
import './EditerBox.css';



export default class EditerBox extends Component{
    render(){
        return(
           
            <div className ='editor-container'>
<div className='editer-choice-box'>
    <h5>Editer's Choice</h5>
</div>
<div className='editer-box'>
    <p> Save This Search <button>See All</button> </p>

</div>
</div>

        )
    }
}