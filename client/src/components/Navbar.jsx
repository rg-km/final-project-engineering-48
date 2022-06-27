import {
      Collapse,
      Navbar,
      NavbarToggler,
      NavbarBrand,
      Nav,
      NavItem,
      NavLink,
      UncontrolledDropdown,
      DropdownToggle,
      DropdownMenu,
      DropdownItem,
      NavbarText
} from 'reactstrap';
import React,{useState} from 'react';

export default function NavbarCom(props){
      const [isOpen, setIsOpen] = useState(false);

      const toggle = () => setIsOpen(!isOpen);

      return(
            <div>
  <Navbar
    style={{backgroundColor: '#F2CB8A'}}
    expand="md"
    light
    fixed="top"
  >
    <NavbarBrand href="/">
      Tulis Aja
    </NavbarBrand>
    <NavbarToggler onClick={function noRefCheck(){}} />
    <Collapse navbar>
      <Nav
        className="me-auto"
        navbar
      >
        <NavItem>
          <NavLink href="/Writing">
            Writing
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/Reading">
            Reading
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/About">
            About
          </NavLink>
        </NavItem>
        <NavItem>
      <NavLink href="/Login">
        Login
      </NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="/Register">
        Register
      </NavLink>
    </NavItem>
      </Nav>
    </Collapse>
  </Navbar>
</div>
      )
      

}