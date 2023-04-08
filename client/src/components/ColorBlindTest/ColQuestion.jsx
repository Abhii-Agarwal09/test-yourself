import React from 'react';
import './ColQuestion.css';

function ColQuestion({ setIsLoggedIn }) {
  const [formData, setFormData] = React.useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: '',
  });

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === 'checkbox' ? checked : value,
      };
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    // submitToApi(formData)
    console.log(formData);
  }

  return (
    <>
      <div className="col-title-wrapper">
        <div className="col-title">Colorblindness Test</div>
      </div>
      <form onSubmit={handleSubmit}>
        {/* question 1 */}
        <div className="questions">
          <div id="image">
            <img src="../src/images/1_num.png" />
          </div>
          <div className="right-side">
            <div className="instruction">Choose the number visible.</div>
            <div className="options">
              <input
                type="radio"
                id="1-1"
                name="question1"
                value="1"
                checked={formData.question1 === '1'}
                onChange={handleChange}
              />
              <label htmlFor="1-1">1</label>
              <br />

              <input
                type="radio"
                id="1-2"
                name="question1"
                value="2"
                checked={formData.question1 === '2'}
                onChange={handleChange}
              />
              <label htmlFor="1-2">2</label>
              <br />

              <input
                type="radio"
                id="1-3"
                name="question1"
                value="3"
                checked={formData.question1 === '3'}
                onChange={handleChange}
              />
              <label htmlFor="1-3">3</label>
              <br />

              <input
                type="radio"
                id="1-4"
                name="question1"
                value="4"
                checked={formData.question1 === '4'}
                onChange={handleChange}
              />
              <label htmlFor="1-4">4</label>
              <br />
            </div>
          </div>
        </div>

        {/* question 2 */}
        <div className="questions">
          <div id="image">
            <img src="../src/images/2_num.png" />
          </div>
          <div className="right-side">
            <div className="instruction">Choose the number visible.</div>
            <div className="options">
              <input
                type="radio"
                id="2-1"
                name="question2"
                value="1"
                checked={formData.question2 === '1'}
                onChange={handleChange}
              />
              <label htmlFor="2-1">1</label>
              <br />

              <input
                type="radio"
                id="2-2"
                name="question2"
                value="2"
                checked={formData.question2 === '2'}
                onChange={handleChange}
              />
              <label htmlFor="2-2">2</label>
              <br />

              <input
                type="radio"
                id="2-3"
                name="question2"
                value="3"
                checked={formData.question2 === '3'}
                onChange={handleChange}
              />
              <label htmlFor="2-3">3</label>
              <br />

              <input
                type="radio"
                id="2-4"
                name="question2"
                value="4"
                checked={formData.question2 === '4'}
                onChange={handleChange}
              />
              <label htmlFor="2-4">4</label>
              <br />
            </div>
          </div>
        </div>

        {/* question 3 */}
        <div className="questions">
          <div id="image">
            <img src="../src/images/3_num.png" />
          </div>
          <div className="right-side">
            <div className="instruction">Choose the number visible.</div>
            <div className="options">
              <input
                type="radio"
                id="3-1"
                name="question3"
                value="1"
                checked={formData.question3 === '1'}
                onChange={handleChange}
              />
              <label htmlFor="3-1">1</label>
              <br />

              <input
                type="radio"
                id="3-2"
                name="question3"
                value="2"
                checked={formData.question3 === '2'}
                onChange={handleChange}
              />
              <label htmlFor="3-2">2</label>
              <br />

              <input
                type="radio"
                id="3-3"
                name="question3"
                value="3"
                checked={formData.question3 === '3'}
                onChange={handleChange}
              />
              <label htmlFor="3-3">3</label>
              <br />

              <input
                type="radio"
                id="3-4"
                name="question3"
                value="4"
                checked={formData.question3 === '4'}
                onChange={handleChange}
              />
              <label htmlFor="3-4">4</label>
              <br />
            </div>
          </div>
        </div>

        {/* question 4 */}
        <div className="questions">
          <div id="image">
            <img src="../src/images/4_num.png" />
          </div>
          <div className="right-side">
            <div className="instruction">Choose the number visible.</div>
            <div className="options">
              <input
                type="radio"
                id="4-1"
                name="question4"
                value="1"
                checked={formData.question4 === '1'}
                onChange={handleChange}
              />
              <label htmlFor="4-1">1</label>
              <br />

              <input
                type="radio"
                id="4-2"
                name="question4"
                value="2"
                checked={formData.question4 === '2'}
                onChange={handleChange}
              />
              <label htmlFor="4-2">2</label>
              <br />

              <input
                type="radio"
                id="4-3"
                name="question4"
                value="3"
                checked={formData.question4 === '3'}
                onChange={handleChange}
              />
              <label htmlFor="4-3">3</label>
              <br />

              <input
                type="radio"
                id="4-4"
                name="question4"
                value="4"
                checked={formData.question4 === '4'}
                onChange={handleChange}
              />
              <label htmlFor="4-4">4</label>
              <br />
            </div>
          </div>
        </div>

        {/* question 5 */}
        <div className="questions">
          <div id="image">
            <img src="../src/images/5_num.png" />
          </div>
          <div className="right-side">
            <div className="instruction">Choose the number visible.</div>
            <div className="options">
              <input
                type="radio"
                id="5-1"
                name="question5"
                value="5"
                checked={formData.question5 === '5'}
                onChange={handleChange}
              />
              <label htmlFor="5-1">5</label>
              <br />

              <input
                type="radio"
                id="5-2"
                name="question5"
                value="6"
                checked={formData.question5 === '6'}
                onChange={handleChange}
              />
              <label htmlFor="5-2">6</label>
              <br />

              <input
                type="radio"
                id="5-3"
                name="question5"
                value="7"
                checked={formData.question5 === '7'}
                onChange={handleChange}
              />
              <label htmlFor="5-3">7</label>
              <br />

              <input
                type="radio"
                id="5-4"
                name="question5"
                value="8"
                checked={formData.question5 === '8'}
                onChange={handleChange}
              />
              <label htmlFor="5-4">8</label>
              <br />
            </div>
          </div>
        </div>

        {/* question 6 */}
        <div className="questions">
          <div id="image">
            <img src="../src/images/6_num.png" />
          </div>
          <div className="right-side">
            <div className="instruction">Choose the number visible.</div>
            <div className="options">
              <input
                type="radio"
                id="6-1"
                name="question6"
                value="5"
                checked={formData.question6 === '5'}
                onChange={handleChange}
              />
              <label htmlFor="6-1">5</label>
              <br />

              <input
                type="radio"
                id="6-2"
                name="question6"
                value="6"
                checked={formData.question6 === '6'}
                onChange={handleChange}
              />
              <label htmlFor="6-2">6</label>
              <br />

              <input
                type="radio"
                id="6-3"
                name="question6"
                value="7"
                checked={formData.question6 === '7'}
                onChange={handleChange}
              />
              <label htmlFor="6-3">7</label>
              <br />

              <input
                type="radio"
                id="6-4"
                name="question6"
                value="8"
                checked={formData.question6 === '8'}
                onChange={handleChange}
              />
              <label htmlFor="6-4">8</label>
              <br />
            </div>
          </div>
        </div>

        {/* question 7 */}
        <div className="questions">
          <div id="image">
            <img src="../src/images/7_num.png" />
          </div>
          <div className="right-side">
            <div className="instruction">Choose the number visible.</div>
            <div className="options">
              <input
                type="radio"
                id="7-1"
                name="question7"
                value="5"
                checked={formData.question7 === '5'}
                onChange={handleChange}
              />
              <label htmlFor="7-1">5</label>
              <br />

              <input
                type="radio"
                id="7-2"
                name="question7"
                value="6"
                checked={formData.question7 === '6'}
                onChange={handleChange}
              />
              <label htmlFor="7-2">6</label>
              <br />

              <input
                type="radio"
                id="7-3"
                name="question7"
                value="7"
                checked={formData.question7 === '7'}
                onChange={handleChange}
              />
              <label htmlFor="7-3">7</label>
              <br />

              <input
                type="radio"
                id="7-4"
                name="question7"
                value="8"
                checked={formData.question7 === '8'}
                onChange={handleChange}
              />
              <label htmlFor="7-4">8</label>
              <br />
            </div>
          </div>
        </div>

        {/* question 8 */}
        <div className="questions">
          <div id="image">
            <img src="../src/images/8_num.png" />
          </div>
          <div className="right-side">
            <div className="instruction">Choose the number visible.</div>
            <div className="options">
              <input
                type="radio"
                id="8-1"
                name="question8"
                value="5"
                checked={formData.question8 === '5'}
                onChange={handleChange}
              />
              <label htmlFor="8-1">5</label>
              <br />

              <input
                type="radio"
                id="8-2"
                name="question8"
                value="6"
                checked={formData.question8 === '6'}
                onChange={handleChange}
              />
              <label htmlFor="8-2">6</label>
              <br />

              <input
                type="radio"
                id="8-3"
                name="question8"
                value="7"
                checked={formData.question8 === '7'}
                onChange={handleChange}
              />
              <label htmlFor="8-3">7</label>
              <br />

              <input
                type="radio"
                id="8-4"
                name="question8"
                value="8"
                checked={formData.question8 === '8'}
                onChange={handleChange}
              />
              <label htmlFor="8-4">8</label>
              <br />
            </div>
          </div>
        </div>

        {/* question 9 */}
        <div className="questions">
          <div id="image">
            <img src="../src/images/9_num.png" />
          </div>
          <div className="right-side">
            <div className="instruction">Choose the number visible.</div>
            <div className="options">
              <input
                type="radio"
                id="9-1"
                name="question9"
                value="7"
                checked={formData.question9 === '7'}
                onChange={handleChange}
              />
              <label htmlFor="9-1">7</label>
              <br />

              <input
                type="radio"
                id="9-2"
                name="question9"
                value="8"
                checked={formData.question9 === '8'}
                onChange={handleChange}
              />
              <label htmlFor="9-2">8</label>
              <br />

              <input
                type="radio"
                id="9-3"
                name="question9"
                value="9"
                checked={formData.question9 === '9'}
                onChange={handleChange}
              />
              <label htmlFor="9-3">9</label>
              <br />

              <input
                type="radio"
                id="9-4"
                name="question9"
                value="10"
                checked={formData.question9 === '10'}
                onChange={handleChange}
              />
              <label htmlFor="9-4">10</label>
              <br />
            </div>
          </div>
        </div>

        {/* question 10 */}
        <div className="questions">
          <div id="image">
            <img src="../src/images/0_num.png" />
          </div>
          <div className="right-side">
            <div className="instruction">Choose the number visible.</div>
            <div className="options">
              <input
                type="radio"
                id="10-1"
                name="question10"
                value="0"
                checked={formData.question10 === '0'}
                onChange={handleChange}
              />
              <label htmlFor="10-1">0</label>
              <br />

              <input
                type="radio"
                id="10-2"
                name="question10"
                value="9"
                checked={formData.question10 === '9'}
                onChange={handleChange}
              />
              <label htmlFor="10-2">9</label>
              <br />

              <input
                type="radio"
                id="10-3"
                name="question10"
                value="8"
                checked={formData.question10 === '8'}
                onChange={handleChange}
              />
              <label htmlFor="10-3">8</label>
              <br />

              <input
                type="radio"
                id="10-4"
                name="question10"
                value="7"
                checked={formData.question10 === '7'}
                onChange={handleChange}
              />
              <label htmlFor="10-4">7</label>
              <br />
            </div>
          </div>
        </div>

        <div className="button-container-div">
          <button className="fancy-btn">Submit answers</button>
        </div>
      </form>
    </>
  );
}

export default ColQuestion;
