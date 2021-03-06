import React, { Component } from "react";
import { Route } from "react-router-dom";
// import { withRouter } from "react-router";
import logo from "./arrows.svg";
import "./App.css";
import Stock from "./components/stock/Stock.js";
// import API from "./utils/API";
// import axios from "axios";
import LoginModule from "./pages/LoginModule";
// import Test from "./components/stock/stockTest.js"
// import Stock2 from "./components/stock/stock2.js"
import Stock4 from "./components/stock/Stock4.js"
import { BrowserRouter as  Router } from 'react-router-dom'


// const App = () => (
//   <div>
//     <LoginPage/>
//   </div>
// );
class App extends Component {
  componentWillMount() {
    console.log("><><");

    // API.RandomStock()
    // .then(data => {
    //   if (!data.data || !data.data["Meta Data"]) {
    //     return;
    //   }

    //   const newStock = {
    //     symbol: data.data["Meta Data"].Symbol
    //   };

    //   this.setState({
    //     stock: [...this.state.stock, newStock]
    //   });
    // });
  }

  render() {
    return (
      <div className="App">
        <div className="navbar">
          <button className="active waves-effect waves-light btn">Login</button>
          <button className="active waves-effect waves-light btn">Profile</button>
          <button className="active waves-effect waves-light btn">Search</button>
          <button className="active waves-effect waves-light btn">My Stocks</button>
        </div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">My Stock Tracker</h1>
        </header>

        {/* <LoginModule />
        <Stock4 />
        <Stock /> */}

        <Route path="/stock/:symbol" component={Stock} />
        {/* <Route path="/" exact component={HomePage} /> */}
        {/* <Route path="/login" exact component={LoginPage}/> */}
      </div>
    );
  }
}

export default App;
