import React, { useState, useEffect } from 'react';
import StoryReal from './StoryReal';
import MassegeSender from './MassageSender';
import Post from "./Post";
import './Feed.css';
import db from './firebase';



function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) => 
          setPosts(snapshot.docs.map((doc) => ({id: doc.id, data: doc.data() })))
        );
    }, []);


    return (
        <div className="feed">
            <StoryReal />
            <MassegeSender />

            {posts.map((post) => (
               <Post
                  key={post.id}
                  profilePic={post.data.profilePic}
                  message={post.data.message}
                  timestamp={post.data.timestamp}
                  username={post.data.username}
                  image={post.data.image}
               />
            ))}
        </div>
    );
}

export default Feed
