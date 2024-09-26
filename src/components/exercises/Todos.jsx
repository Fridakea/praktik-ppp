import { useState } from "react";

export function Todos() {
  const [todos, setTodos] = useState(["tomat", "ost", "pizza"]);

  return (
    <div>
        <div className="todo-list bg-red-400 p-4 py-6 sm:py-12 flex flex-col items-start">
        <input />
        <button className="bg-slate-200 py-1 px-3">Indsæt</button>
        <div className="flex flex-row">
          <input type="checkbox" id="input1" name="input1"/>
          <label htmlFor="input1">...</label>
        </div>

        {
          todos.map((nextTodo) => <p>{nextTodo}</p>)
        }
      </div>
    </div>
  );
}