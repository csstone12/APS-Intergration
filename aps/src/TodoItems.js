import React, { Component } from "react";
 
class TodoItems extends Component {
  createTasks(item) {
    return <li onClick={() => this.delete(item.key)}
            key={item.key}>{item.text}</li>
  }

  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }
 
  delete(key) {
    this.props.delete(key);
  }

  deleteItem(key) {
    console.log(key);
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });
   
  this.setState({
    items: filteredItems
  });
  }
 
  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);
    console.log(listItems)
    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};
 
export default TodoItems;