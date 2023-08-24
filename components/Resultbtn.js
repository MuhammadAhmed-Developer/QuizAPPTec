"use client"



export default function Resultbtn() {
    const hanldeResult = () =>{
      console.log('g');
    }
  return (
    <div>
    <button onClick={hanldeResult} className="bg-blue-500 py-3 px-5 shadow-md text-white font-bold m-4 rounded-md">Submit</button>
  </div>
  )
}
