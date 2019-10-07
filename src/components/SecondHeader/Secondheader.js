import React from 'react';
import { Nav, NavItem, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import './style.css'
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
        dropdownOpen: false,
    };
    this.toggles = this.toggles.bind(this);
    this.state = {
        dropdownOpens: false,
    };
    this.toggless = this.toggless.bind(this);
    this.state = {
        dropdownOpenss: false,
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  toggles() {
    this.setState({
      dropdownOpens: !this.state.dropdownOpens
    });
  }
  toggless() {
    this.setState({
      dropdownOpenss: !this.state.dropdownOpenss
    });
  }

  render() {
    return (
      <div className='bg'>
        <div>
        <Nav pills className='nav-control'>
         
          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              Websites
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>Header</DropdownItem>
              <DropdownItem disabled>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <NavItem>
            <NavLink href="#">eCommerce</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#"> Content/Ads</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#"> AdSense</NavLink>
            
          </NavItem>
          <NavItem>
            <NavLink disabled href="#"> SaaS</NavLink>
            
          </NavItem>
          <Dropdown nav isOpen={this.state.dropdownOpens} toggle={this.toggles}>
            <DropdownToggle nav caret>
              Apps
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem >Header</DropdownItem>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>
          <Dropdown nav isOpen={this.state.dropdownOpenss} toggle={this.toggless}>
            <DropdownToggle nav caret>
              Domains
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem >Header</DropdownItem>
              <DropdownItem>Action</DropdownItem>
              <DropdownItem>Another Action</DropdownItem>
              <DropdownItem />
              <DropdownItem>Another Action</DropdownItem>
            </DropdownMenu>
          </Dropdown>

        </Nav >
        </div>
        <div className='buyer-link'>
        <a className='buyer-link ' href="#">Register as a buyer ! its free</a>
        </div>
      </div>
    );
  }
}