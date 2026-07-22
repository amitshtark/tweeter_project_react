import { createContext, useContext, useEffect, useState } from "react";
import { getTweets, createTweet } from "../lib/tweetsApi.js";

const TweetsContext = createContext();

export function TweetsProvider({ children }) {
  const [tweets, setTweets] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [error, setError] = useState("");

  async function loadTweets() {
    try {
      setIsLoading(true);
      setError("");

      const data = await getTweets();
      setTweets(data);
    } catch (err) {
      setError("Failed to load tweets");
    } finally {
      setIsLoading(false);
    }
  }

  async function addTweet(content) {
    const newTweet = {
      content: content,
      date: new Date().toISOString(),
      userName: localStorage.getItem("username") || "Amit",
    };

    try {
      setIsAdding(true);
      setError("");

      const createdTweet = await createTweet(newTweet);

      if (createdTweet) {
        setTweets((prevTweets) => [createdTweet, ...prevTweets]);
      }
    } catch (err) {
      setError("Failed to create tweet");
    } finally {
      setIsAdding(false);
    }
  }

  useEffect(() => {
    loadTweets();

    // const intervalId = setInterval(() => {
    //   loadTweets();
    // }, 5000);

    // return () => {
    //   clearInterval(intervalId);
    // };
  }, []);

  const value = {
    tweets,
    isLoading,
    isAdding,
    error,
    addTweet,
  };

  return (
    <TweetsContext.Provider value={value}>
      {children}
    </TweetsContext.Provider>
  );
}

export function useTweets() {
  return useContext(TweetsContext);
}