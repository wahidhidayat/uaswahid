import React, { useState } from 'react';
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
} from  'reactstrap';
import { Component } from 'react';

const Header = (props) => {
        const [isOpen, setIsOpen] = useState(false);
      
        const toggle = () => setIsOpen(!isOpen);
      
        return (
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/Home">Cerita Pendek</NavbarBrand>
              <NavbarToggler onClick={toggle} />
              <Collapse isOpen={isOpen} navbar>
                <Nav className="mr-auto" navbar>
                  <NavItem>
                    <NavLink href="/Dashboard">CerPen</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/Biodata">Biodata</NavLink>
                  </NavItem>
                  <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                      Input Data
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem href="/Input">
                        Cerita Pendek
                      </DropdownItem>
                    </DropdownMenu>
                  </UncontrolledDropdown>
                </Nav>
              </Collapse>
              <NavLink href="/">Logout</NavLink>
            </Navbar>
          </div>
        );
      }
    
export default Header;