import React from "react";
export class TodoList extends React.Component {
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

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <form onSubmit={this.SubmitEventHandler}>
          <input name="todoElement" />
          <button>Add To List</button>
        </form>
      </div>
    );
  }
}
