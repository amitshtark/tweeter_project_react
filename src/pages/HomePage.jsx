import { useState, useEffect } from "react";
import  CreateTweet from "../components/CreateTweet.jsx"
import  TweetList from "../components/TweetList.jsx"
import {getTweets} from "../lib/tweetsApi.js"

function HomePage() {

    const [tweets, setTweets] = useState(() => {
        const savedTweets = localStorage.getItem("tweets")
        if(savedTweets)
            return JSON.parse(savedTweets);
        return [];
    });
    const [serverResponse, setServerResponse] = useState("");
    const USERNAME = "Amit"


    useEffect(() => {        
        localStorage.setItem("tweets", JSON.stringify(tweets));
        
            }, [tweets]);
            useEffect(() => {
        async function checkGetResponse() {
            const data = await getTweets();
            setServerResponse(JSON.stringify(data, null, 2));
        }

        checkGetResponse();
        }, []);

    function addTweet(content){
        const newTweet = {
            id: Date.now(),
            content: content,
            date: new Date().toISOString(),
            userName: USERNAME,
        };
        setTweets([newTweet, ...tweets])
    }
    
    
    return (
    <div className="home-page">
        <pre className="server-response">{serverResponse}</pre>
      <CreateTweet addTweet = {addTweet}></CreateTweet>
      <TweetList tweets = {tweets}></TweetList>
    </div>
    );
}

export default HomePage;