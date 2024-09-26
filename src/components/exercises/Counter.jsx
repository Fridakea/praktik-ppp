import { useState } from "react";

// let number = 0;

// function traditional(){
//   document.querySelector('h1').innerHTML = ++number;
// }

export function Counter() {
  const [num, setNum] = useState(0);

  return (
    <div>
      <h1 className="text-4xl">{num}</h1>
      <button onClick={() => setNum(num + 1)}>+1</button>
    </div>
  );
}