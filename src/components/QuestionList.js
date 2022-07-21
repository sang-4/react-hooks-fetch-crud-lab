import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions,setQuestions] = useState([])

  useEffect(()=>{
    fetch('http://localhost:4000/questions')
    .then(resp => resp.json())
    .then(quiz => console.log(quiz))
  },[])

  const quizzes = questions.map((quiz)=>{
    return <QuestionItem
    key={quiz.id}
    question = {quiz}
    handleDeleted = {handleDeleted}
    onAnswerChange={handleAnswerChange}
    />
  })
  function handleAnswerChange(updated){
    const updatedQuestions = questions.map((item)=>{
      if(item.id===updated.id){
        return updated
      }
      return item
    })
    setQuestions(updatedQuestions)
  }

  function handleDeleted(deleted){
    const newList = questions.filter((quizes)=> quizes.id!==deleted.id)
    setQuestions(newList)
    console.log(deleted)
  }
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {quizzes}
      </ul>
    </section>
  );
}

export default QuestionList;