import  Tweet from "./Tweet.jsx"



function TweetList(props) {
  return (
    <div className="tweet-list">
        {props.tweets.map((tweet) => {
          return <Tweet key={tweet.id} tweet={tweet}/>
        })}
    </div>
  );
}

export default TweetList;