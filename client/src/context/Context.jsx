import axios from 'axios';
import React, { useState, useContext } from 'react';



const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [waiting, setWaiting] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppContext.Provider
      value={{
        waiting,
        loading,
        // questions,
        index,
        correct,
        error,
        // isModalOpen,
        // nextQuestion,
        // checkAnswer,
        // closeModal,
        // quiz,
        // handleChange,
        // handleSubmit,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
