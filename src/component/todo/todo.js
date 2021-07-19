import React, { useState, useCallback } from "react";
import ListItems from "./listItems";

import usePageTitle from "../../hooks/usePageTitle";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [item, setItem] = useState("");
  const [count, setCount] = useState(0);
  const [completed, setCompleted] = useState([]);

  const updateItem = (e) => {
    setItem(e.target.value);
  };

  usePageTitle(todos.length);

  const addItem = useCallback(() => {
    if (item.length > 0) {
      let itemObj = { name: item, id: count };
      setTodos([...todos, itemObj]);
      setCount(count + 1);
      setItem("");
    }
  }, [todos, count, item]);

  const removeItem = useCallback(
    (item) => {
      let newTodos = todos.filter((todo) => todo.id !== item.id);
      setTodos(newTodos);
      setCompleted([...completed, item]);
    },
    [completed, todos]
  );

  const keyDown = (e) => e.code === "Enter" && addItem();
  return (
    <div className="container-fluid">
      <div className="col-xs-1 text-center mt-sm-3">
        <input
          className="m-3"
          type="text"
          value={item}
          onChange={updateItem}
          onKeyPress={keyDown}
        />
        <button type="button" className="btn btn-primary" onClick={addItem}>
          Add Item
        </button>
        <hr />
        <div className="row">
          <div className="col border-end">
            <h1> Pending...</h1>
            <ListItems items={todos} removeItem={removeItem} />
          </div>
          <div className="col">
            <h1> Completed</h1>
            <ListItems items={completed} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
