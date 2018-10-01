import React, { Component } from "react";
 
class InCartItems extends Component {
  createTasks(item) {
    return <li key={item.key}>{item.text}</li>
  }
 
  render() {
    var cartEntries = this.props.entries;
    var listItems = cartEntries.map(this.createTasks);
 
    return (
      <ul className="theCart">
          {listItems}
      </ul>
    );
  }
};
 
export default InCartItems;