import React from 'react';
import './App.css';
import InitialLoadScreen from "./components/AppInitialLoad/InitialLoad.js";
import UserLogin from './components/UserSignup/UserSignup.js';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      showContent:false
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
      <div className="App">
        <div id='Loader' className={`${this.state.isLoading ? "show" : "hide"}`}>
          <InitialLoadScreen />
        </div>
        <div className={`${this.state.showContent ? "show center" : "hide"}`}>
          <UserLogin />
        </div>
      </div>
    )
  }
}

export default App;
