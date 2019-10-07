import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import image1 from './pic/a.jpg';
import image2 from './pic/b.jpg';
import image3 from './pic/c.png';
import image4 from './pic/d.jpg';
import {Icon} from 'antd';
import './card.css';


export default () => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div  className='card-container' style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth} >

        <div className='main' style={{ height: 300, padding:'10px', background: '#EEE',border:'1px solid black' }}> <img src={image1} alt=""/> 
        <p >abcdefg.com</p> <h6 >U$60,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='main1'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image2} alt=""/>
         <p>abcdefg.com</p> <h6>U$50,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>
         
        <div className='main2'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image3} alt=""/>
         <p>abcdefg.com</p> <h6>U$70,000</h6>
         <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='main3'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image4} alt=""/> 
        <p>abcdefg.com</p> <h6>U$20,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
        </div>





        <div className='main4'  style={{ height: 300, padding:'10px', background: '#EEE',border:'1px solid black' }}> <img src={image1} alt=""/> 
        <p>abcdefg.com</p> <h6>U$60,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='main5'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image2} alt=""/>
         <p>abcdefg.com</p> <h6>U$50,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>
         
        <div className='main6'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image3} alt=""/>
         <p>abcdefg.com</p> <h6>U$70,000</h6>
         <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='main7'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image4} alt=""/> 
        <p>abcdefg.com</p> <h6>U$20,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
        </div>


        <div className='main8'  style={{ height: 300, padding:'10px', background: '#EEE',border:'1px solid black' }}> <img src={image1} alt=""/> 
        <p>abcdefg.com</p> <h6>U$60,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='main9'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image2} alt=""/>
         <p>abcdefg.com</p> <h6>U$50,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>
         
        <div className='main10'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image3} alt=""/>
         <p>abcdefg.com</p> <h6>U$70,000</h6>
         <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='main11'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image4} alt=""/> 
        <p>abcdefg.com</p> <h6>U$20,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
        </div>


        <div className='main12 '  style={{ height: 300, padding:'10px', background: '#EEE',border:'1px solid black' }}> <img src={image1} alt=""/> 
        <p>abcdefg.com</p> <h6>U$60,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='main13'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image2} alt=""/>
         <p>abcdefg.com</p> <h6>U$50,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>
         
        <div className='main14'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image3} alt=""/>
         <p>abcdefg.com</p> <h6>U$70,000</h6>
         <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='main15'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image4} alt=""/> 
        <p>abcdefg.com</p> <h6>U$20,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
        </div>


        <div className='main16'  style={{ height: 300, padding:'10px', background: '#EEE',border:'1px solid black' }}> <img src={image1} alt=""/> 
        <p>abcdefg.com</p> <h6>U$60,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='main17'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image2} alt=""/>
         <p>abcdefg.com</p> <h6>U$50,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>
         
        <div className='main18'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image3} alt=""/>
         <p>abcdefg.com</p> <h6>U$70,000</h6>
         <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='mainq9'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image4} alt=""/> 
        <p>abcdefg.com</p> <h6>U$20,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
        </div>

        <div className='main20'  style={{ height: 300, padding:'10px', background: '#EEE',border:'1px solid black' }}> <img src={image1} alt=""/> 
        <p>abcdefg.com</p> <h6>U$60,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='main21'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image2} alt=""/>
         <p>abcdefg.com</p> <h6>U$50,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>
         
        <div className='main22'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image3} alt=""/>
         <p>abcdefg.com</p> <h6>U$70,000</h6>
         <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
         </div>

        <div className='main23'  style={{ height: 300,  padding:'10px', background: '#EEE',border:'1px solid black' }}><img src={image4} alt=""/> 
        <p>abcdefg.com</p> <h6>U$20,000</h6>
        <div className='icon-main-box'>
         <div className='icon-box'> <Icon type="eye" /> Watch</div> 
         <div className='add' >Serves/ads </div>
         </div>
        </div>
      </ItemsCarousel>
    </div>
  );
};