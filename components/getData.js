"use client"

// import Resultbtn from "@/components/Resultbtn";
import { useEffect, useState } from "react";

// export default function GetData() {

//     const [state, setState] = useState([])
//     // const [result, setResult] = useState(0)

//     const [questions, setQuestions] = useState([]);
//     const [score, setScore] = useState(0);

//     useEffect(() => {

//         const getQuestions = async () => {
//             try {
//                 const res = await fetch('http://localhost:3000/api/ques', { cache: "no-store", })
//                 let json = await res.json()
//                 // console.log(json);
//                 if (!res.ok) {
//                     throw new Error('Failed to Fetch Question')
//                 }
//                 // return json;
//                 setState(json)
//             } catch (error) {
//                 console.log(error);
//             }
//         }

//            getQuestions()
       
//     }, [])




//     const checkQuiz = (selectedOption, correctOption) => {
//         if (!questions.some(q => q.selected)) { // Check if no option is selected for this question yet
//             const isCorrect = selectedOption === correctOption;
//             if (isCorrect) {
//                 setScore(prevScore => prevScore + 1);
//             }
    
//             // Update the selected state for the question to prevent further changes
//             setQuestions(prevQuestions =>
//                 prevQuestions.map(q =>
//                     q._id === selectedQuestionId
//                         ? { ...q, selected: true }
//                         : q
//                 )
//             );
//         }
//     };
    

    
//     const calculateResult = () => {
//         alert(`Your Correct Answer is ${score} Out of ${state.length}`);
//         // Optionally, you can reload the page after displaying the result.
//         // window.location.reload();
//     };


//     return (

//         <>
//             {state.map((q, i) => (
//                 <div key={i} className="mt-16 w-11/12 mx-auto p-8  ">
//                     <div className="bg-gray-100   p-11  rounded-lg shadow-xl">
//                         <h2 className="text-2xl font-semibold mb-2">{q.question}</h2>
//                         <div className="space-y-2 text-lg">
//                             <label className="flex items-center">
//                                 <input rid='op1' type="radio" name={q._id} value={q.option1}
//                                     onClick={() => { checkQuiz(q.option1, q.correctOption) }}
//                                     className="mr-2" />
//                                 {q.option1}
//                             </label>
//                             <label className="flex items-center">
//                                 <input rid='op2' type="radio" name={q._id} value={q.option2} onClick={() => { checkQuiz(q.option2, q.correctOption) }} className="mr-2" />
//                                 {q.option2}
//                             </label>
//                             <label className="flex items-center">
//                                 <input rid='op3' type="radio" name={q._id} onClick={() => { checkQuiz(q.option3, q.correctOption) }} value={q.option3} className="mr-2" />
//                                 {q.option3}
//                             </label>
//                         </div>
//                     </div>

//                 </div>
//             ))}
//             {/* <Resultbtn /> */}
//             <button className="my-10 bg-blue-500 py-2 px-3 shadow rounded-md text-white" onClick={calculateResult} >submit</button>
//         </>
//     )
// }



export default function GetData() {

    const [questions, setQuestions] = useState([]);
    const [score, setScore] = useState(0);

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

    const checkQuiz = (selectedOption, correctOption, questionId) => {
        if (questions.some(q => q._id === questionId && q.selectedOption === null)) {
            const isCorrect = selectedOption === correctOption;
            if (isCorrect) {
                setScore(prevScore => prevScore + 1);
            }

            // Update the selected option for the question to prevent further changes
            setQuestions(prevQuestions =>
                prevQuestions.map(q =>
                    q._id === questionId
                        ? { ...q, selectedOption }
                        : q
                )
            );
        }
    };

    const calculateResult = () => {
        alert(`Your Score is ${score} Out of ${questions.length}`);
        // Optionally, you can reload the page after displaying the result.
        window.location.reload();
    };

    return (
        <>
        
            {questions.map((q) => (
                <div key={q._id} className="mt-16 w-11/12 mx-auto p-8">
                    <div className="bg-gray-100 p-11 rounded-lg shadow-xl">
                        <h2 className="text-2xl font-semibold mb-2">{q.question}</h2>
                        <div className="space-y-2 text-lg">
                            {/* {q.options.map((option, index) => ( */}
                                <label  className="flex items-center">
                                    <input
                                        type="radio"
                                        name={q._id}
                                        value={q.option1}
                                        onClick={() => { checkQuiz(q.option1, q.correctOption, q._id) }}
                                        className="mr-2"
                                        // disabled={q.selectedOption !== null}
                                    />
                                    {q.option1}
                                </label>
                                <label  className="flex items-center">
                                    <input
                                        type="radio"
                                        name={q._id}
                                        value={q.option2}
                                        onClick={() => { checkQuiz(q.option2, q.correctOption, q._id) }}
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
                                        onClick={() => { checkQuiz(q.option3, q.correctOption, q._id) }}
                                        className="mr-2"
                                        // disabled={q.selectedOption !== null}
                                    />
                                    {q.option3}
                                </label>
                            {/* // ))} */}
                        </div>
                    </div>
                </div>
            ))}

            <div className="text-center">
            <button className="my-10 bg-blue-500 py-2 px-3 shadow rounded-md text-white" onClick={calculateResult}>Submit</button>
            </div>
            </>
    );
}

