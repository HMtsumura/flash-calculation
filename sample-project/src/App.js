import React from 'react';
import { BrowserRouter, Route, Link, RouteComponentProps } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Layout from "./components/Layout"
import Main from "./components/Main"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Layout />
        <Main />
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/friends'>Friends</Link></li>
        </ul>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} /> 
        <Route path='/friends' component={Friends} />                
      </div>
    </BrowserRouter>
  );
}

const Home = () => (
  <div>
    <h2>Home</h2>
    <p>Welcome to ようこそ</p>
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
