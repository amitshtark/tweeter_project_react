import  CreateTweet from "../components/CreateTweet.jsx"
import  TweetList from "../components/TweetList.jsx"
import { useTweets } from "../context/TweetsContext.jsx";

function HomePage() {
    const { isLoading, error } = useTweets();
    return (
    <div className="home-page">
        <CreateTweet />

        {isLoading && <p>Loading tweets</p>}
        {error && (<p className="error-message">{error}</p>)}

        <TweetList />
    </div>
    );
}

export default HomePage;