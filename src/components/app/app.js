import React, { Component } from "react";
import "./app.css";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel/";
import ItemStatus from "../item-status/";
import ToDoList from "../todo-list";
import AddListItem from "../add-list-item";

export default class App extends Component {
  maxId = 100;

  state = {
    toDoData: [
      this.createNewItem("Drink Coffee"),
      this.createNewItem("Learn React"),
      this.createNewItem("Have a Lunch")
    ],
    term: "",
    filter: "active" // 'active', 'all', 'done'
  };

  createNewItem(label) {
    return {
      label,
      id: this.maxId++,
      important: false,
      done: false
    };
  }

  deleteItem = id => {
    // Because we need to return new state and use olf state we pass function to setState
    this.setState(({ toDoData }) => {
      return {
        toDoData: toDoData.filter(el => el.id !== id)
      };
    });
  };

  addItem = label => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: [...toDoData, this.createNewItem(label)]
      };
    });
  };

  updateState = (toDoData, propertyToUpdate, id) => {
    const idx = toDoData.findIndex(el => el.id === id);

    const oldElem = toDoData[idx];
    const newElem = {
      ...oldElem,
      [propertyToUpdate]: !oldElem[propertyToUpdate]
    };

    return [...toDoData.slice(0, idx), newElem, ...toDoData.slice(idx + 1)];
  };

  filter = (items, filter) => {
    switch (filter) {
      case "done":
        return items.filter(el => el.done);
      case "active":
        return items.filter(el => !el.done);
      case "all":
        return items;
      default:
        return items;
    }
  };

  search(items, term) {
    if (term.length === 0) return items;
    return items.filter(
      el => el.label.toLowerCase().indexOf(term.toLowerCase()) >= 0
    );
  }

  onToggleImportant = id => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.updateState(toDoData, "important", id)
      };
    });
  };

  onToggleDone = id => {
    this.setState(({ toDoData }) => {
      return {
        toDoData: this.updateState(toDoData, "done", id)
      };
    });
  };

  onSearchChange = term => {
    this.setState({ term });
  };

  onFilterChange = filter => {
    this.setState({ filter });
  };

  render() {
    const { toDoData, term, filter } = this.state;
    const filteredItems = this.filter(this.search(toDoData, term), filter);
    const doneCount = toDoData.filter(el => el.done === true).length;
    const todoCount = toDoData.length - doneCount;

    return (
      <div className="app">
        <AppHeader todo={todoCount} done={doneCount} />
        <section className="status">
          <SearchPanel onSearchChange={this.onSearchChange} />
          <ItemStatus filter={filter} onFilterChange={this.onFilterChange} />
        </section>

        <ToDoList
          data={filteredItems}
          onDeleted={this.deleteItem}
          onToggleImportant={this.onToggleImportant}
          onToggleDone={this.onToggleDone}
        />

        <AddListItem onAddItem={this.addItem} />
      </div>
    );
  }
}

// alternative way
// const el = React.createElement('h1', null, 'Hello, World');
