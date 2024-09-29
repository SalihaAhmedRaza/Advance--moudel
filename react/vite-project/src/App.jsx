import { useState } from "react";

     
         
         
         
         
function App() {
   const [num,setNum]= useState(0)




  function addCoumter(){
    console.log("counter added");
    setNum(num+1)
  }

  function decrease(){
    console.log("counter decrease");
    if (num > 0) {  // Ensure the counter does not go below 0
      setNum(num - 1);
  }
    
  }

  function reset(){
    console.log("counter reset");
    setNum(0)
  }


return(
  <>
  <h1>Hello world {num}</h1>
  <button onClick={addCoumter}>addcounter</button>
  <button onClick={decrease}>decrease</button>
  <button onClick={reset}>reset</button>
  
  </>
)
}
export default App
