import { useState } from "react";


function CreateTweet(props) {

    const [content, setContent] = useState('');
    const isTooLong = content.length > 140;
    const isEmpty = content.trim() === "";

    function submit(){
        if (isTooLong || isEmpty) return;

        props.addTweet(content.trim());
        setContent("");
    }

    return (
        <div className="create-tweet-box">
            <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="What do you have in mind?"
            />

            {isTooLong && (
            <p className="error-message">
                Tweet cannot be more than 140 characters
            </p>
            )}

            <div className="tweet-actions">
            <span>{content.length}/140</span>
            <button disabled={isTooLong || isEmpty} onClick={submit}>
                Create
            </button>
            </div>
        </div>
    );
}

export default CreateTweet;