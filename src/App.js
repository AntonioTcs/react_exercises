import React from "react";
import "./main.css";

export class App extends React.Component {
  render() {
    return (
      <TodoList>
        trythis=
        {(items) => {
          return (
            <div>
              <ul>
                {items.map((item, index) => (
                  <div>
                    <li key={index}>{item}</li>
                    {
                      <button id={index} onClick={this.RemoveBtnHandler}>
                        Remove
                      </button>
                    }
                  </div>
                ))}
              </ul>
            </div>
          );
        }}
      </TodoList>
    );
  }
}
class TodoList extends React.Component {
  state = {
    items: ["Buy Chocolate", "Jogging", "Study"],
  };

  SubmitEventHandler = (event) => {
    event.preventDefault();

    const newItem = event.target.elements.todoElement.value;
    const stateArray = this.state.items;
    stateArray.push(newItem);

    this.setState({
      items: stateArray,
    });

    event.target.elements.todoElement.value = "";
  };

  ResetBtnHandler = (event) => {
    this.setState({
      items: [],
    });
  };

  RemoveBtnHandler = (event) => {
    const index = event.target.id;
    let newArray = this.state.items;

    newArray.splice(index, 1);

    this.setState({
      items: newArray,
    });
  };

  render() {
    return (
      <div>
        {this.props.trythis(this.state.items)}

        <form onSubmit={this.SubmitEventHandler}>
          <input name="todoElement" />
          <button>Add To List</button>
          <button type="button" onClick={this.ResetBtnHandler}>
            Reset
          </button>
        </form>
      </div>
    );
  }
}
