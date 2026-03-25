import {useState} from "react";
function Counter(){

const [count,setCount]=useState(0);//sate,function modify state

//function to omodify sttae
const  increment=()=>{
setCount(count+1);
};
const decrement=()=>{
setCount(count-1);
};
return (
<div className="text-centre p-4 border text-center">
<h1 className="text-2xl">count:{count}</h1>
<button className="px-6 py-2 bg-red-500" onClick={increment}>+</button>
<button className="px-6 py-2 bg-green-400" onClick={decrement}>-</button>
</div>)}
export default Counter;