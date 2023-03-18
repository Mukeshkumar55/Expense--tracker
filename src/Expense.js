import React from "react";
import moment from "moment";

class Expensecalc extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expenseAmount: 0, input: 0 };
  }

  add(input) {
    if (input >= 0) {
      this.setState({ expenseAmount: this.state.expenseAmount + input });
      let date = moment().format();
      this.props.val(input, date, "Add");
    }
  }

  remove(input) {
    if (input >= 0) {
      this.setState({ expenseAmount: this.state.expenseAmount - input });
      let date = moment().format();

      this.props.val(input, date, "Remove");
    }
  }

  click11 = (event) => {
    let valueinput = parseInt(event.target.value);
    this.setState({ input: valueinput });
  };

  render() {
    return (
      <div>
        <div className="border">
          <h2 className="balance">
            Balance:<span className="amount">{this.state.expenseAmount}</span>
          </h2>
          <input
            onChange={this.click11}
            name="input"
            className="input"
            type="number"
          />
          <br></br>
          <button
            className="add"
            onClick={() => {
              this.add(this.state.input);
            }}
          >
            Add
          </button>
          <button
            className="remove"
            onClick={() => {
              this.remove(this.state.input);
            }}
          >
            Remove
          </button>
        </div>
      </div>
    );
  }
}

export default Expensecalc;
