'use client'

import { useEffect, useState } from "react";
import RemoveBtn from "./RemoveBtn";

export default function UserQuestions({id}) {
    const [questions, setQuestions] = useState([]);

    
    useEffect(() => {
        const getQuestions = async () => {
            try {
                const res = await fetch('http://localhost:3000/api/ques', { cache: "no-store" });
                if (!res.ok) {
                    throw new Error('Failed to Fetch Question');
                }
                const json = await res.json();
                setQuestions(json.map(q => ({ ...q, selectedOption: null })));
            } catch (error) {
                console.log(error);
            }
        }

        getQuestions();
    }, []);



  return (
  <>
  <h1 className="text-center font-bold text-3xl mt-10">Your Questions</h1>
       {questions.map((q, i) => (
                <div key={i} className="mt-16 w-11/12 mx-auto ">
                    <div className="bg-gray-100 p-11 rounded-lg shadow-xl">
                    <div className="m-3 font-bold text-xl">Q: {i +1}</div>
                        <h2 className="text-2xl font-semibold mb-2">{q.question}</h2>
                        <div className="space-y-2 text-lg">
                            {/* {q.options.map((option, index) => ( */}
                                <label  className="flex items-center">
                                    <input
                                        type="radio"
                                        name={q._id}
                                        value={q.option1}                                        className="mr-2"
                                        // disabled={q.selectedOption !== null}
                                    />
                                    {q.option1}
                                </label>
                                <label  className="flex items-center">
                                    <input
                                        type="radio"
                                        name={q._id}
                                        value={q.option2}
                                        className="mr-2"
                                        // disabled={q.selectedOption !== null}
                                    />
                                    {q.option2}
                                </label>
                                <label  className="flex items-center">
                                    <input
                                        type="radio"
                                        name={q._id}
                                        value={q.option3}
                                        className="mr-2"
                                        // disabled={q.selectedOption !== null}
                                    />
                                    {q.option3}
                                </label>
                            {/* // ))} */}

                            <div className="text-end">
                                <RemoveBtn id={q._id}/>
                            {/* <button onClick={removeQuestion}  className="py-1 px-2 bg-red-400 text-white rounded-md">Delete</button> */}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
  </>
  )
}
