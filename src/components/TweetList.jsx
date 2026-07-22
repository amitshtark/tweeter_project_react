import  Tweet from "./Tweet.jsx"
import { useTweets } from "../context/TweetsContext.jsx";


function TweetList() {
  const { tweets } = useTweets();
  return (
    <div className="tweet-list">
        {tweets.map((tweet) => {
          return <Tweet key={tweet.id} tweet={tweet}/>
        })}
    </div>
  );
}

export default TweetList;