import "./App.css";
import React from "react";
import Heading from "./Heading";
import ColQuestion from "./components/ColorBlindTest/ColQuestion";
import QuizForm from "./components/Dashboard/QuizForm";
import { useGlobalContext } from "./context/Context";
import Modal from "./components/Modal/Modal";
import Navbar from "./components/Navbar/Navbar";
import Landing from "./components/Landing/Landing";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";

const App = () => {
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
    return <QuizForm />;
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
    <>
      <Navbar />
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
    </>
  );
};

export default App;
