import { useState, useEffect } from "react";

function ProfilePage() {

    const [username, setUsername] = useState(() => {
        return localStorage.getItem("username") || "Amit";
    });

    const isUsernameEmpty = username.trim() === "";


    function handleUsernameChange(event){

        setUsername(event.target.value);
    }

    function saveUsername(){
        if(username.trim() === "") return;
        
        localStorage.setItem("username", username);
    }

    
    
    return (
    <div className="profile-page">

        <h2>Profile</h2>

        <input
            value={username}
            onChange={handleUsernameChange}
            placeholder="Enter username"
         />

         <button disabled={isUsernameEmpty} onClick={saveUsername}>Save</button>
         
    </div>
    );
}

export default ProfilePage;