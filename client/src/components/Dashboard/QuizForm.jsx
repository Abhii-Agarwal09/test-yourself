import React from "react";
import Landing from "../Landing/Landing";
import Login from "../Login/Login";
import Register from "../Register/Register";
import { useGlobalContext } from "../../context/Context";

const QuizForm = () => {
  const { quiz, handleChange, handleSubmit, error } = useGlobalContext();
  return (
    <div>
      <Landing />

      <section className="quiz quiz-small">
        <form>
          <h2 style={{ marginBottom: "2rem" }}>Let's Start Quiz</h2>
          <div className="mb-3">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              className="form-select"
              name="category"
              id="category"
              value={quiz.category}
              onChange={handleChange}
            >
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="politics">politics</option>
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="noOfQuestions" className="form-label">
              {" "}
              Number of Questions
            </label>
            <input
              type="number"
              name="amount"
              id="noOfQuestions"
              className="form-control"
              value={quiz.amount}
              onChange={handleChange}
              min={1}
              max={50}
              style={{ width: "400px" }}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="difficulty" className="form-label">
              Difficulty
            </label>
            <select
              className="form-select"
              name="difficulty"
              id="difficulty"
              value={quiz.difficulty}
              onChange={handleChange}
            >
              <option value="easy">easy</option>
              <option value="medium">medium</option>
              <option value="hard">hard</option>
            </select>
          </div>
          {error && (
            <p className="error">
              Can't generate questions,please try other options
            </p>
          )}
          <button
            type="submit"
            onClick={handleSubmit}
            // className='btn btn-primary start-btn'
            style={{
              backgroundColor: "#C98C70",
              width: "400px",
              margin: "0 auto",
            }}
          >
            Start
          </button>
        </form>
      </section>
    </div>
  );
};

export default QuizForm;
