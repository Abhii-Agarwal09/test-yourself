import React from "react";
import QuizStart from "./QuizStart";
import { useGlobalContext } from "../../context/Context";
import Modal from "../Modal/Modal";

function QuizProgress() {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    nextQuestion,
    checkAnswer,
  } = useGlobalContext();

  if (waiting) {
    return <QuizStart />;
  }
  if (loading) {
    return <h2>Loading...</h2>;
  }

  const { question, incorrect_answers, correct_answer } = questions[index];
  let answers = [...incorrect_answers];
  const tempIndex = Math.floor(Math.random() * 4);
  if (tempIndex === 3) {
    answers.push(correct_answer);
  } else {
    answers.push(answers[tempIndex]);
    answers[tempIndex] = correct_answer;
  }
  return (
    <main>
      {/* <Navbar /> */}
      {/* <Landing /> */}
      {/* <Login />
      <Register /> */}
      <Modal />

      <section className="quiz">
        <p>
          Correct Answer:{correct}/{index}
        </p>
        <article className="container">
          <h2 dangerouslySetInnerHTML={{ __html: question }} />
          <div>
            {answers.map((answer, index) => {
              return (
                <>
                  <button
                    key={index}
                    style={{
                      width: "60%",
                      textAlign: "center",
                      backgroundColor: "#C98C70",
                    }}
                    className="btn btn-info answer-btn"
                    onClick={() => checkAnswer(correct_answer === answer)}
                    dangerouslySetInnerHTML={{ __html: answer }}
                  />
                </>
              );
            })}
          </div>
        </article>
        <button
          className="btn btn-warning next-question"
          style={{ width: "20%", marginRight: "1rem" }}
          onClick={nextQuestion}
        >
          Next Question
        </button>
      </section>
    </main>
  );
}

export default QuizProgress;
