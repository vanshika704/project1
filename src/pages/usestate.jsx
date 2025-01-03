import { useState } from "react"; // import krwaya 
// function 
function Counterapp (){
    const [count , setCount ] = useState(0); // use state  initialize

    return <><center>
   <div className="text-cyan-600 text-5xl">You pressed the button {count} times</div>
   <button  className="bg-slate-400 h-16 w-16 rounded-lg" onClick={()=>{setCount(count+1)}}>Number badhao</button></center>
    </>
}
export default Counterapp;