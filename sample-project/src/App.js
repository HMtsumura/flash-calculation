import React from 'react';
import { BrowserRouter, Route, Link, RouteComponentProps } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout"
import Main from "./components/Main"
import Question from "./components/Question"
import RangeSlider from 'react-bootstrap-range-slider';

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
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/main'>Main</Link></li>
          <li><Link to='/friends'>Friends</Link></li>
        </ul>
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
    <p>edited</p>
  </div>
)
const About = () => (
  <div>
    <h2>About</h2>
    <p>フレンズに投票するページです</p>
  </div>
)

const Friends = () => (
  <div>
    <h2>Friends</h2>
    <p>フレンズに投票するページです</p>
  </div>
)
export default App;
