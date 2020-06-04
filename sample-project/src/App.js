import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
// import logo from './logo.svg';
import './App.css';
// import Layout from "./components/Layout"
import Main from "./components/Main"
// import Question from "./components/Question"
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar, Button } from 'react-bootstrap'; 

function App() {
  const [ value, setValue ] = React.useState(50);
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Layout />
        <Main /> */}
        {/* <RangeSlider
          value={value}
          onChange={e => setValue(Number(e.target.value))}
        /> */}
        <Navbar bg="primary" variant="dark">
          <Navbar.Brand href="/">Navbar</Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/main">Main</Nav.Link>
            <Nav.Link href="/friends">Friend</Nav.Link>
          </Nav>
        </Navbar>
        {/* <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/main'>Main</Link></li>
          <li><Link to='/friends'>Friends</Link></li>
        </ul> */}
        <Route exact path='/' component={Home} />
        <Route path='/main' 
          render= {() => <Main value={value}/>}/> 
        <Route path='/friends' component={Friends} /> 
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
    <Button variant="outline-primary" color="primary">
          スタート
    </Button>
  </div>
)
// const About = () => (
//   <div>
//     <h2>About</h2>
//     <p>フレンズに投票するページです</p>
//   </div>
// )

const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>フレンズに投票するページです</p>
  </div>
)
export default App;
