import { useState, useEffect } from "react";
import  CreateTweet from "../components/CreateTweet.jsx"
import  TweetList from "../components/TweetList.jsx"
import {createTweet, getTweets} from "../lib/tweetsApi.js"

function HomePage() {

    const [tweets, setTweets] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [error, setError] = useState("");


    const USERNAME = "Amit"



    useEffect(() => {
        async function loadTweets() {
            try{
                setIsLoading(true);
                setError("");
                const data = await getTweets();
                setTweets(data);
            }
            catch(err){
                setError("Failed to load tweets");
            }
            finally{
                setIsLoading(false);
            }
        }

        loadTweets();
        }, []);

    async function addTweet(content){

        const newTweet = {
            content: content,
            date: new Date().toISOString(),
            userName: USERNAME,
        };

        try{
            setError("");
            setIsAdding(true);
            const createdTweet = await createTweet(newTweet);
            if(createdTweet) setTweets((prevTweets) => [createdTweet, ...prevTweets]);
        }
        catch(err){
            setError("Failed to create tweet");
        }
        finally{
            setIsAdding(false);
        }
    }
    
    
    return (
    <div className="home-page">
        <CreateTweet addTweet = {addTweet} isAdding ={isAdding}></CreateTweet>

        {isLoading && <p>Loading tweets</p>}
        {error && (<p className="error-message">{error}</p>)}

        <TweetList tweets = {tweets}></TweetList>
    </div>
    );
}

export default HomePage;