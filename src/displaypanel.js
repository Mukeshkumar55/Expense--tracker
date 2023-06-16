import React from "react";

class Display extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var displaysection = this.props.view.map((value) => {
      return (
        <div className="displayContainer">
          <p className="input-details">
            {value.Date} - {value.amount} - {value.event1}
          </p>
        </div>
      );
    });

    return (
      <div className="displaysec">
        <h3 className="transaction">Transaction:</h3>
        <div className="displaysection">{displaysection}</div>
      </div>
    );
  }
}

export default Display;
