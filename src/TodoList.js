import React, { Component, Fragment } from "react";

class TotoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "Hello!!!!!",
      list: [],
    };
  }
  render() {
    return (
      <Fragment>
        <div>
          <input
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button>Commit</button>
        </div>
        <ul>
          <li>Learn English</li>
          <li>Learn Reatct</li>
        </ul>
      </Fragment>
    );
  }

  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  }
}

export default TotoList;
