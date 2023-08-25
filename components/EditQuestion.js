"use client"

import { useState } from "react"
import {  useRouter } from "next/navigation"


export default function EditQuestion({id, question, option1, option2, option3, correctOption}) {


    const router = useRouter()
    const [newQuestion, setNewQuestion]  = useState(question)
    const [newOption1, setNewOption1]  = useState(option1)
    const [newOption2, setNewOption2]  = useState(option2)
    const [newOption3, setNewOption3]  = useState(option3)
    const [newCorrectOption, setnewCorrectOption]  = useState(correctOption)


    const handleUpdate = async (e) =>{
     e.preventDefault()
     try {
        const res = await fetch(`http://localhost:3000/api/ques/${id}`,{
            method:"PUT",
            headers:{
                "Content-Type": "application/json"
            },
            body:JSON.stringify({newQuestion, newOption1, newOption2, newOption3, newCorrectOption})
        })

        if(res.ok){
         throw new Error('Failed To Update')
        }
         router.push('/addquestion')
     } catch (error) {
        console.log(error);
     }
    }

  return (
    <div>
         <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4 text-center">Update Quiz Question</h1>

      <div className="bg-gray-100  p-10 rounded-lg shadow-xl">
        <form onSubmit={handleUpdate}>
          <div className="mb-4">
            <label htmlFor="question" className="block text-lg font-semibold mb-2">Question:</label>
            <textarea value={newQuestion}  onChange={(e)=> setNewQuestion(e.target.value)} id="question" name="question" rows="3" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="option1" className="block font-semibold mb-2">Option 1:</label>
            <input  value={newOption1} onChange={(e)=>setNewOption1(e.target.value)} type="text" id="option1" name="option1" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="option2" className="block font-semibold mb-2">Option 2:</label>
            <input value={newOption2}  onChange={(e)=>setNewOption2(e.target.value)} type="text" id="option2" name="option2" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="option3" className="block font-semibold mb-2">Option 3:</label>
            <input value={newOption3}  onChange={(e)=>setNewOption3(e.target.value)} type="text" id="option3" name="option3" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>

          <div className="mb-4">
            <label htmlFor="correctOption" className="block font-semibold mb-2">Correct Option:</label>
            <input value={newCorrectOption}  type="text" onChange={(e)=>setnewCorrectOption(e.target.value)} id="correctOption" name="correctOption" className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500" />
          </div>

          <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Update Question</button>
        </form>
      </div>

    </div>
    </div>
  )
}