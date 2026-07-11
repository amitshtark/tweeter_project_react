import { useState } from "react";
import  CreateTweet from "../components/CreateTweet.jsx"
import  TweetList from "../components/TweetList.jsx"


function HomePage() {

    const [tweets, setTweets] = useState([]);
    const USERNAME = "Amit"



    function addTweet(content){
        const id = Date.now();
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
      <CreateTweet addTweet = {addTweet}></CreateTweet>
      <TweetList tweets = {tweets}></TweetList>
    </div>
    );
}

export default HomePage;