import React, {Component} from 'react';
 import Header from './components/Header/Header';
import SecondHeader from './components/SecondHeader/Secondheader';
import Heading from './components/Heading/Heading';
import Detail from './components/ForthBox/Detail';
import Boxes from './components/FifthBox/Boxes';
import EditerBox from './components/EditerBox/EditerBox';
import Card from './components/Card/Card';
import NumberBox from './components/numberBox/numberBox';
import PaymentBox from './components/paymentBox/payment';
import DomainsValues from './components/Domains/DomainsValues';
import Gurentee from './components/gurrenteevBox/Gurentee';
import FlipaPilot from './components/flipaPilotBox/FipaPilot';
import Register from './components/RegisterBox/Register';
import FlippaDetail from './components/FlippaDetailEnd/FlippaDetail';
import Footer from './components/Footer/Footer';



class  App extends Component{
  render(){

  
  return (
    <div className="App">
      <Header /> <br/><br/><br/> <br/>
      <SecondHeader />
      <Heading  />
      <Detail />
      <Boxes />
      <EditerBox />
      <Card />
      <EditerBox />
      <Card />
      <EditerBox />
      <Card />
      <EditerBox />
      <Card />
       <NumberBox />
 <PaymentBox />
 <EditerBox />
 <DomainsValues />
  <Gurentee />
<FlipaPilot />
<Register />
<br/>
<br/>
<hr/>
<FlippaDetail />
<hr/>
<Footer />
    </div>




  );
}
}



export default App;
