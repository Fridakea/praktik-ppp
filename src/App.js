import { useState } from "react";

// let number = 0;

// function traditional(){
//   document.querySelector('h1').innerHTML = ++number;
// }

export function App() {
  const [num, setNum] = useState(0);

  return (
    <div className="App">
      <h1 className="text-4xl">{num}</h1>
      <button onClick={() => setNum(num + 1)}>+1</button>
      <br />
      <br />

      <div className="todo-list bg-red-400 p-4 py-6 sm:py-12 flex flex-col items-start">
        <input />
        <button>Indsæt ToDo</button>
        <input type="checkbox" id="input1" name="input1"/>
        <label htmlFor="input1">...</label>
      </div>
    </div>
  );
}