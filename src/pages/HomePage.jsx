import { useState } from "react";
import  CreateTweet from "./components/CreateTweet.jsx"
import  TweetList from "./components/TweetList.jsx"


function HomePage() {

    const [tweets, setTweets] = useState([]);
    const USERNAME = "idk what to write here"



    function addTweet(content){
        const id = Date.now();
        const date = new Date(id).toLocaleString([], {
            dateStyle: "short",
            timeStyle: "short"
        });
        let newTweet = {id: id, content: content, date: date, userName: USERNAME}
        setTweets([...tweets, newTweet])
    }
    
    
    return (
    <div>
      <CreateTweet></CreateTweet>
      <TweetList></TweetList>
    </div>
    );
}

export default HomePage;