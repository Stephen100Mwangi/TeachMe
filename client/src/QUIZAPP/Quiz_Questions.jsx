import { useState } from "react"
import { data } from "../components/Questions";
import toast from 'react-hot-toast'
import { Toaster } from "react-hot-toast";

const Quiz_Questions = () => {

    const [questionIndex,setIndex] = useState(0);
    const question = data[questionIndex];
    const [score,setScore] = useState(0);
    const [percentage,setPercentage] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [isLocked, setIsLocked] = useState(false); 
    const [selectedAnswers, setSelectedAnswers] = useState({});
    const [passed,setPassed] = useState(false);
    const [pass,setPass] = useState(false);
    const [seeAnswer,setSeeAnswer] = useState(false);

    const showNextQuestion = ()=>{
        if (questionIndex < data.length - 1) {
          setSeeAnswer(false)
          // setPass(false);
          setIndex((prevIndex) => prevIndex + 1)
          setSelectedAnswer(null);  // Reset for the next question
          setIsLocked(false); 
        }
    }
    const showPreviousQuestion =()=>{
      if (questionIndex > 0) {
        setIndex((prevIndex) => prevIndex - 1)
        setSeeAnswer(true)

        data.forEach(question =>{
          if (question[questionIndex].answer === selectedAnswers[questionIndex]) {
            return question[questionIndex].answer
          }else{
            setPass(false)
            return question[questionIndex].answer
          }
        })
      }
    }

    const checkAnswer = (answer)=>{
        setSelectedAnswer(answer);
        setSelectedAnswers((prev) => ({
          ...prev,
          [questionIndex]: answer,
        }));
        setIsLocked(true); 
        if (question.answer === answer) {
          toast.success("Correct")
          setScore((prevScore) => prevScore + 1);
          setPercentage(score/data.length * 100);
        }else{
          toast.error("Wrong answer")
        }

    }

    const getOptionStyle = (option) => {
        if (!selectedAnswer) return {};
        if (option === question.answer) {
            return { backgroundColor: "green", color: "white", fontWeight:"bold" };  // Correct answer
        }
        if (option === selectedAnswer) {
            return { backgroundColor: "red", color: "white" };  // Incorrect answer
        }
        return {};  // Default style
    }

    const endQuiz = ()=>{
      if (percentage >= 60) {
        setPassed(true);
      }else{
        setPassed(false);
      }
    }
    
  return (
    <div className="w-full p-8 flex justify-center items-center space-y-3 flex-col">
      <h1 className="text-2xl font-bold pb-5 border-b text-headColor">Quick Quiz</h1>
      <Toaster></Toaster>
      <div className="w-1/2 rounded-lg shadow-lg p-3">
        <p className="text-base font-bold text-black">Score: <span className="text-sm font-light">{score}</span></p>
        <div className="flex items-center justify-start space-x-2">
          <small className="text-sm text-black font-mono">{question.id}.</small>
          <h1 className="text-lg text-black">{question.question}</h1>
        </div>
       
        <ul>
          {['option1', 'option2', 'option3', 'option4'].map((opt) => (
            <li
              key={opt}
              onClick={() => checkAnswer(question[opt])}
              style={getOptionStyle(question[opt])}
              className="text-black font-light p-2 border hover:bg-card border-headColor my-2 cursor-pointer"
            >
                {question[opt]}
            </li>
                    ))}
            {
              pass && seeAnswer && <p className="text-green-500">You scored this question.Correct answer is {question.answer}</p>
            }
            {
              pass && seeAnswer && <p className="text-red-500">You failed this question.Correct answer is {question.answer}</p>
            }
        </ul>
        <div className="flex w-full justify-evenly">
          {
            questionIndex > 0 && (<button onClick={showPreviousQuestion} style={{background: isLocked ? "blue" : "black"}} className="text-white p-2 px-6 rounded-sm hover:rounded-full">Previous</button>)
          }

          {
            questionIndex === data.length - 1 && (<button onClick={endQuiz} style={{background: isLocked ? "red" : "green"}} className="text-white p-2 px-6 rounded-sm hover:rounded-full">Finish</button>)
          }

          {
            questionIndex < data.length && (<button onClick={showNextQuestion} style={{background: isLocked ? "red" : "green"}} className="text-white p-2 px-6 rounded-sm hover:rounded-full">Next</button>)
          }
        </div>

        {
          isLocked && (<p className="text-green-500">{question.answer}</p>)
        }
        
        <div className="text-sm text-black mt-5">Question {question.id} of {data.length}</div>
        <div className="text-sm font-bold text-black my-2">Score: <span className={`${percentage} < 30 ? text-red-500 : ${percentage} < 60 ? text-blue-500 : ${percentage} > 70 ? text-green-500`}>{percentage}%</span></div>
      </div>
      {
        passed && (
          <div>Passed</div>
        )
      }
    </div>
  )
}

export default Quiz_Questions
