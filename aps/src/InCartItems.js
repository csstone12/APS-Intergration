import React, { Component } from "react";
 
class InCartItems extends Component {
  createTasks(item) {
    return <li onClick={() => this.pop(item.key)}
            key={item.key}>{item.text}</li>
  }
  constructor(props) {
    super(props);
 
    this.createTasks = this.createTasks.bind(this);
  }

  // createCart(key){
  //   var inCart = this.items.map(key);
  //   return inCart
  // }

  render() {
    var cartEntries = this.props.entries;
    var inCart = Object.keys(cartEntries).map(function(key) {
      return [Number(key), cartEntries[key]];
    });
    console.log(cartEntries);
    console.log(inCart);
    return (
      <ul className="theCart">
          {inCart}
      </ul>
    );
  }
};
 
export default InCartItems;