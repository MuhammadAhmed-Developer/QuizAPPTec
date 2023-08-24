// "use client"

import Resultbtn from "@/components/Resultbtn";


const getQuestions = async () => {
  try {
    const res = await fetch('http://localhost:3000/api/ques', { cache: "no-store", })
    let json = await res.json()
    if (!res.ok) {
      throw new Error('Failed to Fetch Question')
    }
    return json
  } catch (error) {
    console.log(error);
  }
}
export default async function GetData() {
  const questions = await getQuestions()
  // console.log("questions",questions)
  // const [result, setResult] = useState(0)
  // const checkQuiz = (option, coreect) => {
  //   // console.log(option,coreect)
  //   // if (option === coreect) {
  //   //   let rsultOFQuiz = result + 1
  //   //   setResult(rsultOFQuiz)
  //   // }
  // }

  return (

    <>
      {questions.map((q) => (

        <div key={q._id} className="mt-16 w-11/12 mx-auto p-8  ">
          <div className="bg-gray-100   p-11  rounded-lg shadow-xl">
            <h2 className="text-2xl font-semibold mb-2">{q.question}</h2>
            <div className="space-y-2 text-lg">
              <label className="flex items-center">
                <input rid='op1' type="radio" name={q._id} value={q.option1} 
                // onClick={() => { checkQuiz(q.option1, q.correctOption) }}
                 className="mr-2" />
                {q.option1}
              </label>
              <label className="flex items-center">
                <input rid='op2' type="radio" name={q._id} value={q.option2} className="mr-2" />
                {q.option2}
              </label>
              <label className="flex items-center">
                <input rid='op3' type="radio" name={q._id} value={q.option3} className="mr-2" />
                {q.option3}
              </label>
            </div>
          </div>

        </div>
      ))}
      <Resultbtn/>  
      {/* <button onClick={checkQuiz} >submit</button> */}
    </>
  )
}


// export default function Quiz() {
//   return (
//     <div>Quiz page Hellow world </div>
//   )
// }

