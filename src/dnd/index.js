import React, { Component } from "react";
import HTML5Backend from 'react-dnd-html5-backend';
import { DragDropContext } from 'react-dnd';
import Card from "./Card";

class DND extends Component {
  render() {
    return <Card/>;
  }
}

export default DragDropContext(HTML5Backend)(DND)