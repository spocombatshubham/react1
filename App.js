import { useState } from "react";

function App() {
  let [val, setcounter] = useState(0);

  const addValue = () => {
    val++;
    setcounter(val);
  };
  const decValue = () => {
    if(val>0){
    val--;
    setcounter(val);
    }
    else
    {
      alert("value can't be negative")
    }
  };
  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value = {val}</h2>
      <button onClick={addValue}>Add value</button>
      <button onClick={decValue}>remove value</button>
    </>
  );
}

export default App;
