import React from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand
} from 'mdb-react-ui-kit';
import ('./NavBar.css')

export default function App() {
  return (
    <>
      <MDBNavbar light bgColor='light'>
        <MDBContainer fluid>
          <MDBNavbarBrand tag="span" className='mb-0 h1'>Gift App</MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}