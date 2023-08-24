// const getQuestions = async () =>{
//     try {
//         const res = await fetch('http://localhost:3000/api/ques')
//         if(!res.ok){
//            throw new Error('Failed to Fetch Question')
//         }
//        return res.json
//     } catch (error) {
//         console.log(error);
//     }
// }
// export default async function QuizQues() {
 
//     const {Questions} = await getQuestions()
    

//     return (
//         <>
//         {Questions.map((q, i)=>(
//             <div key={i} className="container mx-auto p-8 mt-10">
//           <div className="bg-gray-100   p-11  rounded-lg shadow-xl">
//           <h2 className="text-2xl font-semibold mb-2">{q.question}</h2>
//           <div className="space-y-2 text-lg">
//             <label className="flex items-center">
//               <input type="radio" name="q1" value="paris" className="mr-2" />
//               {q.option1}
//             </label>
//             <label className="flex items-center">
//               <input type="radio" name="q1" value="london" className="mr-2" />
//               {q.option2}
//             </label>
//             <label className="flex items-center">
//               <input type="radio" name="q1" value="berlin" className="mr-2" />
//               {q.option3}
//             </label>
//           </div>
//         </div>
//         <div className="mt-4 text-end mx-6">
//           <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">Next</button>
//         </div>
//       </div>
//     ))}
//     </>
//     )
//   }
  

export default function QuizQues() {
  return (
    <div>Quiz Component</div>
  )
}

