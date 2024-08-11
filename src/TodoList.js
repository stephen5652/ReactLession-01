import React, { Component, Fragment } from "react";
import "./style.css";

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
          {
            // 下面是一个input框
          }
          <label htmlFor="insertArea">Input content:</label>
          <input
            id="insertArea"
            className="input"
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}
          />
          <button onClick={this.handleBtnClick.bind(this)}>Commit</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={this.handleItemDelete.bind(this, index)}
                dangerouslySetInnerHTML={{ __html: item }}
              ></li>
            );
          })}
        </ul>
      </Fragment >
    );
  }

  handleInputChange(e) {
    console.log(e.target.value);
    this.setState({
      inputValue: e.target.value,
    });
  }

  handleBtnClick() {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: "",
    });
  }

  handleItemDelete(index) {
    console.log(index);
    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list,
    });
  }
}

export default TotoList;
