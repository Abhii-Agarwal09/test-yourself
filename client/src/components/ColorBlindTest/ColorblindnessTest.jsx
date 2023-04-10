import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { ThemeContext } from '../../context/ThemeContext';

const ColorBlindnessTest = ({ setIsLoggedIn }) => {
  const { theme, handleThemeChange } = useContext(ThemeContext);
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState({});
  const [currentImage, setCurrentImage] = useState(0);
  console.log(currentImage);

  useEffect(() => {
    const postColorBlindData = async (email, type) => {
      const obj = {
        email,
        type,
      };
      const res = await axios.post(
        'http://localhost:3001/result/test/colorblind',
        obj
      );
      console.log(res);
      if (res.data.success === true) {
        setIsLoggedIn(true);
        localStorage.setItem('type', type);
        navigate('/dashboard');
      }
    };

    if (currentImage >= images.length - 1) {
      let results = 0;
      Object.values(selectedOption).forEach((option) => {
        if (option === images[results].correctOption) {
          results += 1;
        }
      });
      console.log(selectedOption);
      let type = 'normal';
      if (results < images.length) {
        if (selectedOption[0] !== '12') {
          type = 'blue-yellow';
        } else if (selectedOption[1] !== '8') {
          type = 'total';
        } else {
          type = 'red-green';
        }
        console.log(type);
        const email = localStorage.getItem('email');
        handleThemeChange(type);
        postColorBlindData(email, type);
      }
    }
  }, [currentImage]);

  const images = [
    {
      src: 'https://www.color-blindness.com/ishihara_cvd_test/img/plates/Ishihara%20Plate%2001-38.png',
      alt: 'Ishihara 38 Plate',
      correctOption: '12',
    },
    {
      src: 'https://www.color-blindness.com/ishihara_cvd_test/img/plates/Ishihara%20Plate%2002-38.png',
      alt: 'Ishihara 24 Plate',
      correctOption: '8',
    },
    {
      src: 'https://www.color-blindness.com/ishihara_cvd_test/img/plates/Ishihara%20Plate%2003-38.png',
      alt: 'Ishihara 14 Plate',
      correctOption: '6',
    },
    {
      src: 'https://www.color-blindness.com/ishihara_cvd_test/img/plates/Ishihara%20Plate%2004-38.png',
      alt: 'Ishihara 38 Plate',
      correctOption: '29',
    },
    // {
    //   src: 'https://www.color-blindness.com/ishihara_cvd_test/img/plates/Ishihara%20Plate%2005-38.png',
    //   alt: 'Ishihara 38 Plate',
    //   correctOption: '57',
    // },
    // {
    //   src: 'https://www.color-blindness.com/ishihara_cvd_test/img/plates/Ishihara%20Plate%2006-38.png',
    //   alt: 'Ishihara 38 Plate',
    //   correctOption: '5',
    // },
    // {
    //   src: 'https://www.color-blindness.com/ishihara_cvd_test/img/plates/Ishihara%20Plate%2007-38.png',
    //   alt: 'Ishihara 38 Plate',
    //   correctOption: '3',
    // },
    // {
    //   src: 'https://www.color-blindness.com/ishihara_cvd_test/img/plates/Ishihara%20Plate%2008-38.png',
    //   alt: 'Ishihara 38 Plate',
    //   correctOption: '15',
    // },
    // {
    //   src: 'https://www.color-blindness.com/ishihara_cvd_test/img/plates/Ishihara%20Plate%2009-38.png',
    //   alt: 'Ishihara 38 Plate',
    //   correctOption: '74',
    // },
  ];

  const handleOptionChange = (event) => {
    console.log('inside handle option change');
    setSelectedOption({
      ...selectedOption,
      [currentImage]: event.target.value,
    });
  };

  const handleNext = () => {
    console.log('handle next');
    setCurrentImage(currentImage + 1);
  };

  const handlePrev = () => {
    console.log('handle prev');
    setCurrentImage(currentImage - 1);
  };

  return (
    <div className="colorblindness-quiz-container">
      <h2 className="colorblindness-heading">Color Blindness Test</h2>
      <p className="colorblindness-text">Which number do you see?</p>
      <img src={images[currentImage].src} alt={images[currentImage].alt} />
      <div className="colorblindness-answer-container">
        <div>
          <input
            type="radio"
            id="option1"
            value={images[currentImage].correctOption}
            checked={
              selectedOption[currentImage] ===
              images[currentImage].correctOption
            }
            onChange={handleOptionChange}
          />
          <label htmlFor="option1">{images[currentImage].correctOption}</label>
        </div>
        <div>
          <input
            type="radio"
            id="option2"
            value="Other"
            checked={selectedOption[currentImage] === 'Other'}
            onChange={handleOptionChange}
          />
          <label htmlFor="option2">Other</label>
        </div>
      </div>
      <div className="colorblindness-btn-container">
        <button
          onClick={handlePrev}
          disabled={currentImage === 0}
          className="coloraction-btn"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentImage === images.length - 1}
          className="coloraction-btn"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ColorBlindnessTest;
