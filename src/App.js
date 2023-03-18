import React from "react";
import "./App.css";
import Expensecalc from "./Expense";
import Display from "./displaypanel";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      array: [],
    };
  }

  funcval = (inputamt, date, action) => {
    console.log(inputamt);
    this.setState({
      array: [
        ...this.state.array,
        { Date: date, amount: inputamt, event1: action },
      ],
    });
  };

  render() {
    return (
      <div className="exptrack">
        <h1 className="heading">Expense Tracker - Basic</h1>
        <Expensecalc val={this.funcval} />
        <Display view={this.state.array} />
      </div>
    );
  }
}

export default App;
