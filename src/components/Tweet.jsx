

function Tweet({ tweet }) {

    return (
        <div className="tweet">
            <div className="tweet-header">
                <span className="tweet-username">{tweet.userName}</span>
                <span className="tweet-date">{tweet.date}</span>
            </div>

            <p className="tweet-content">bla {tweet.content}</p>
        </div>
    );
}

export default Tweet;