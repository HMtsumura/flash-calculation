import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import './App.css';
// import Layout from "./components/Layout"
import Main from "./components/Main"
import Question from "./components/Question"
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar} from 'react-bootstrap'; 

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/main">Main</Nav.Link>
          </Nav>
        </Navbar>
        <Route exact path='/' component={Main}/> 
        <Route path='/question' component={Question} /> 
      </div>
    </BrowserRouter>
  );
}

export default App;
