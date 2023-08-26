import EditQuestionForm from "../../../components/EditQuestionForm";

const getTopicById = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/api/ques/${id}`, {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("Failed to fetch topic");
    }

    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default  EditQuestionForm = async ({ params }) => {
  const { id } = params;
  const { Question } = await getTopicById(id);
  const { question, option1,option2,option3,correctOption } = Question;

  return <EditQuestionForm id={id} question={question} option1={option1} option2 = {option2} option3={option3} correctOption ={correctOption} />;
}