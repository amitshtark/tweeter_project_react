

function Tweet({ tweet }) {

    return (
        <div className="tweet">
            <div className="tweet-header">
                <span className="tweet-username">{props.userName}</span>
                <span className="tweet-date">{props.date}</span>
            </div>

            <p className="tweet-content">{props.content}</p>
        </div>
    );
}

export default Tweet;