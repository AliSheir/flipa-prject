import React, {Component} from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem,  } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import { MDBCol } from "mdbreact";
import { MDBIcon } from "mdbreact";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  InputGroupDropdown,
  Input,
  Button,
 } from 'reactstrap';
import {Icon} from 'antd';




class Header extends Component{
  constructor(props) {
    super(props);

    this.toggleDropDown = this.toggleDropDown.bind(this);
    this.toggleSplit = this.toggleSplit.bind(this);
    this.state = {
      dropdownOpen: false,
      splitButtonOpen: false
    };
  }

  toggleDropDown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  toggleSplit() {
    this.setState({
      splitButtonOpen: !this.state.splitButtonOpen
    });
  }

    render(){
        
        return(
            <div className='container-head ' >
                      <nav class="navbar navbar-expand-md bg-dark navbar-dark disply Header">
               
               <h1 class="logo">Flippa</h1> 
               <InputGroup style={{width:'280px', marginLeft:'15px'}}>
          <Input className='as'/>
          <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
            <DropdownToggle className='as' style={{backgroundColor:'white', color:"black", textDecoration:'none',}} caret>
              All
            </DropdownToggle>
            <DropdownMenu >
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </InputGroupButtonDropdown>
        </InputGroup>
     
        <Icon className='Icon as'  type="search" />
      
                <button class="navbar-toggler afg " type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                  <span class="navbar-toggler-icon "></span>
                </button>
           
                

                
                <div class="collapse navbar-collapse " id="collapsibleNavbar">
                  <ul class="navbar-nav link">
                    <li class="nav-item link">
                      <a style={{margin:'7px'}} class="nav-link" href="#">Valuation Tool</a>
                    </li>

 
                    <li class="nav-item">
                        <a style={{margin:'7px'}} class="nav-link" href="#">Pricing</a>
                      </li>
                    <li class="nav-item">
                      <a style={{margin:'7px'}} class="nav-link" href="#">Why Us</a>
                    </li>
                    <li class="nav-item">
                        <a style={{margin:'7px'}} class="nav-link" href="#">Sign in</a>
                      </li> 
                      
                      <Button style={{margin:'7px'}} className='button' color="primary">Start Selling</Button>{' '} 
                        
                  </ul>
                </div> 
           </nav>
           </div>
                   )
    }
}


export default Header;