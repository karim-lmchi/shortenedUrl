"use client";
import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import Home from './components/home';

type ContextType = {
  inputValue: string,
  setInputValue: Dispatch<SetStateAction<string>>,
  shortenedUrl: string,
  setShortenedUrl: Dispatch<SetStateAction<string>>,
  isSuccess: boolean,
  setSuccess: Dispatch<SetStateAction<boolean>>,
  displayResponse: boolean,
  setDiplayResponse: Dispatch<SetStateAction<boolean>>,
};

export const Context = createContext<ContextType>({
  inputValue: '',
  setInputValue: () => {},
  shortenedUrl: '',
  setShortenedUrl: () => {},
  isSuccess: false,
  setSuccess: () => {},
  displayResponse: false,
  setDiplayResponse: () => {},
});

const HomePage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [displayResponse, setDiplayResponse] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  return (
    <Context.Provider value={{
      inputValue: inputValue,
      setInputValue: setInputValue,
      isSuccess: isSuccess,
      setSuccess: setSuccess,
      setDiplayResponse: setDiplayResponse,
      shortenedUrl: shortenedUrl,
      displayResponse: displayResponse,
      setShortenedUrl: setShortenedUrl,
    }} >
      <Home />
    </Context.Provider>
  );
};

export default HomePage;
