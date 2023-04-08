import React, { useState, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';
import axios from 'axios';
import './dashboard.css';
import { useNavigate } from 'react-router-dom';
import 'regenerator-runtime';
import SpeechRecognition, {
  useSpeechRecognition,
} from 'react-speech-recognition';
import Webcam from 'react-webcam';

const QuizStart = () => {
  const navigate = useNavigate();
  const API_ENDPOINT = 'https://opentdb.com/api.php?';
  const handle = useFullScreenHandle();
  const [questions, setQuestions] = useState([]);
  const [responses, setResponses] = useState([]);
  // const [disablesQues, setDisablesQues] = useState([]);
  const [index, setIndex] = useState(0);
  const [correct, setCorrect] = useState(0);

  const [error, setError] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    // category: 'sports',
    difficulty: 'easy',
  });
  const videoConstraints = {
    width: 300,
    height: 300,
    facingMode: { exact: 'user' },
  };
  const table = {
    sports: 21,
    history: 23,
    politics: 24,
  };

  const commands = [
    {
      command: 'Topic *',
      callback: (e) => {
        console.log(e);
        // console.log(resetTranscript);
        setTopic(e);
        // resetTranscript();
      },
    },
    {
      command: 'Question *',
      callback: (e) => {
        console.log(e);
        setNumberOfQuestions(e);
      },
    },
    {
      command: 'Difficulty *',
      callback: (e) => {
        console.log(e);
        setDifficulty(e);
      },
    },
    {
      command: 'Start quiz',
      callback: (e) => {
        console.log(topic, numberOfQuestions, difficulty);
        // setDifficulty(e);
        const url = `${API_ENDPOINT}amount=${numberOfQuestions}&difficulty=${difficulty}&category=${table[topic]}&type=multiple`;
        console.log(url);
        fetchQuestions(url);
      },
    },
    {
      command: 'clear',
      callback: ({ resetTranscript }) => {
        setTopic('');
        setNumberOfQuestions('');
        setDifficulty('');
        resetTranscript();
      },
    },
  ];
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition({ commands });

  const [topic, setTopic] = useState('');
  const [numberOfQuestions, setNumberOfQuestions] = useState();
  const [difficulty, setDifficulty] = useState('');
  const topicChangeHandler = (e) => {
    console.log(e);
    console.log(e.target.value);
    setTopic(e.target.value);
  };
  const numberOfQuestionsChangeHandler = (e) => {
    setNumberOfQuestions(e.target.value);
  };
  const difficultyChangeHandler = (e) => {
    setDifficulty(e.target.value);
  };

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true });
  }, []);

  let question, incorrect_answers, correct_answer;
  let answers;

  const fetchQuestions = async (url) => {
    const res = await axios.get(url);
    // console.log(url);
    console.log(res);
    setQuestions(() => res.data.results);
    question = questions[index].question;
    incorrect_answers = questions[index].incorrect_answers;
    correct_answer = questions[index].correct_answer;
    // console.log(question, incorrect_answers, correct_answer);
    answers = [...incorrect_answers];
    const tempIndex = Math.floor(Math.random() * 4);
    if (tempIndex === 3) {
      answers.push(correct_answer);
    } else {
      answers.push(answers[tempIndex]);
      answers[tempIndex] = correct_answer;
    }
  };

  // console.log(questions);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuiz({ ...quiz, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const { amount, category, difficulty } = quiz;
    const url = `${API_ENDPOINT}amount=${numberOfQuestions}&difficulty=${difficulty}&category=${table[topic]}&type=multiple`;
    console.log(url);
    fetchQuestions(url);
  };

  const checkAnswer = (e) => {
    e.currentTarget.disabled = true;
    // console.log(e.target.getAttribute('a-key'));
    const obj = {
      quesKey: Number(e.target.getAttribute('q-key')),
      selectedOption: e.target.innerText,
    };
    setResponses((prevState) => {
      // console.log(prevState);
      prevState.push(obj);
      return prevState;
    });
  };

  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle.
    while (currentIndex != 0) {
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const quizSubmitHandler = async (e) => {
    console.log('quiz submit');
    // Check answers
    let correctAnswers = 0;
    let incorrectAnswers = 0;
    console.log(questions, responses);
    questions.forEach((question, index) => {
      let correctAnswer = question.correct_answer;
      let selectedAnswer = responses[index].selectedOption;
      selectedAnswer === correctAnswer ? correctAnswers++ : incorrectAnswers++;
    });
    console.log(correctAnswers, incorrectAnswers);

    const obj = {
      email: localStorage.getItem('email'),
      subject: questions[0].category,
      numberOfQuestions: questions.length,
      difficulty: questions[0].difficulty,
      maximumMarks: questions.length,
      marksObtained: correctAnswers,
    };

    const res = await axios.post('http://localhost:3001/result/test/quiz', obj);
    console.log(res);
    if (res.data.success === true) {
      navigate('/dashboard');
      setQuestions([]);
      setResponses([]);
      alert(`You scored ${correctAnswers} marks out of ${questions.length}`);
    } else {
      alert('There was an error while attempting the quiz. Please try again.');
      navigate('/dashboard');
      setQuestions([]);
      setResponses([]);
    }
  };

  if (questions.length != 0) {
    return (
      <main className="quiz-container">
        {/* <Modal /> */}
        <Webcam videoConstraints={videoConstraints} />
        <section className="quiz">
          {/* <p>
            Correct Answer:{correct}/{index}
          </p> */}
          {questions.map((question, qindex) => {
            let answers = [];
            question.incorrect_answers.forEach((ans) => answers.push(ans));
            answers.push(question.correct_answer);
            shuffle(answers);
            // console.log(answers);
            return (
              <div className="quiz-question-container" key={qindex + 1}>
                <h3 className="question-text">
                  {qindex + 1}. {question.question}
                </h3>
                <div className="options_container">
                  {answers.map((ans, index) => {
                    // console.log(disablesQues.indexOf(qindex));
                    return (
                      <div key={index}>
                        <button
                          key={index}
                          a-key={index}
                          q-key={qindex}
                          className="btn"
                          style={{ color: 'black', margin: '0.5rem 0' }}
                          onClick={checkAnswer}
                        >
                          {ans}
                        </button>
                        <br />
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
          <button
            className="btn"
            style={{ width: '20%', marginRight: '1rem', color: 'black' }}
            // onClick={nextQuestion}
            onClick={quizSubmitHandler}
          >
            Submit
          </button>
          {/* <article className="container">
            <h2 dangerouslySetInnerHTML={{ __html: question }} />
            <div>
              {answers.map((answer, index) => {
                return (
                  <>
                    <button
                      key={index}
                      style={{
                        width: '60%',
                        textAlign: 'center',
                        backgroundColor: '#C98C70',
                      }}
                      className="btn btn-info answer-btn"
                      onClick={() => checkAnswer(correct_answer === answer)}
                      dangerouslySetInnerHTML={{ __html: answer }}
                    />
                  </>
                );
              })}
            </div>
          </article> */}
        </section>
      </main>
    );
  } else {
    return (
      <div>
        <section className="quiz quiz-small">
          <form onSubmit={handleSubmit}>
            <h2 style={{ marginBottom: '2rem' }}>Let's Start Quiz</h2>
            <div className="mb-3">
              <label htmlFor="category" className="form-label">
                Category
              </label>
              <select
                className="form-select"
                name="category"
                id="category"
                value={topic}
                onChange={topicChangeHandler}
              >
                <option value="#">Select a topic</option>
                <option name="sports" value="sports">
                  sports
                </option>
                <option value="history">history</option>
                <option value="politics">politics</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="noOfQuestions" className="form-label">
                {' '}
                Number of Questions
              </label>
              <input
                type="number"
                name="amount"
                id="noOfQuestions"
                className="form-control"
                value={numberOfQuestions}
                onChange={numberOfQuestionsChangeHandler}
                min={1}
                max={50}
                style={{ width: '400px' }}
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
                value={difficulty}
                onChange={difficultyChangeHandler}
              >
                <option value="#">Select difficulty</option>
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
              onClick={() => {
                handle.enter();
              }}
              style={{
                
                width: '400px',
                margin: '0 auto',
                color: 'white',
              }}
              className="quiz-start-button"
            >
              Start
            </button>
            {/* <p>{transcript}</p> */}
          </form>
        </section>
      </div>
    );
  }
};

export default QuizStart;
