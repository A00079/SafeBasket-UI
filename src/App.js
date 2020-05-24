import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import InitialLoadScreen from "./components/AppInitialLoad/InitialLoad.js";
import UserLogin from './components/UserSignup/UserSignup.js';
import Home from './components/Home/Home.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      showContent: false
    }
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false, showContent: true });
      let elem = document.getElementById("Loader");
      elem.parentNode.removeChild(elem);
    }, 2500);
  }
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div id='Loader' className={`${this.state.isLoading ? "show" : "hide"}`}>
            <InitialLoadScreen />
          </div>
          <div className={`${this.state.showContent ? "show" : "hide"}`}>
          <Route exact path='/' component={UserLogin}></Route>
          </div>
          <Route exact path='/Home' component={Home}></Route>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
