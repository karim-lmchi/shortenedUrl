"use client";
import React, { createContext, useState, Dispatch, SetStateAction } from 'react';
import Home from './components/home';

type ContextType = {
  inputValue: string,
  setInputValue: Dispatch<SetStateAction<string>>,
  shortenedUrl: string,
  setShortenedUrl: Dispatch<SetStateAction<string>>,
  urlRedirection: string,
  setUrlRedirection: Dispatch<SetStateAction<string>>,
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
  urlRedirection: '',
  setUrlRedirection: () => {},
  isSuccess: false,
  setSuccess: () => {},
  displayResponse: false,
  setDiplayResponse: () => {},
});

const HomePage: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [urlRedirection, setUrlRedirection] = useState('');
  const [displayResponse, setDiplayResponse] = useState(false);
  const [isSuccess, setSuccess] = useState(false);

  return (
    <Context.Provider value={{
      inputValue: inputValue,
      setInputValue: setInputValue,
      isSuccess: isSuccess,
      setSuccess: setSuccess,
      shortenedUrl: shortenedUrl,
      setShortenedUrl: setShortenedUrl,
      urlRedirection: urlRedirection,
      setUrlRedirection: setUrlRedirection,
      displayResponse: displayResponse,
      setDiplayResponse: setDiplayResponse,
    }} >
      <Home />
    </Context.Provider>
  );
};

export default HomePage;
