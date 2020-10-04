import React from 'react';
import StoryReal from './StoryReal';
import MassegeSender from './MassageSender';
import Post from "./Post";
import './Feed.css';



function Feed() {
    return (
        <div className="feed">
            <StoryReal />
            <MassegeSender />
            <Post
                profilePic="https://scontent.fybz2-2.fna.fbcdn.net/v/t1.0-9/31398235_1776701519110935_706154741574402048_n.jpg?_nc_cat=105&_nc_sid=09cbfe&_nc_ohc=w4fOFfFOtssAX-nfN2I&_nc_ht=scontent.fybz2-2.fna&oh=e8dc0285e77d356691a7c327cdfe39c1&oe=5FA0CD08"
                message="it is working !"
                timestamp="This is a timestamp!"
                username="Mohib Arsala"
                image="https://cars.usnews.com/static/images/Auto/custom/14240/2020_BMW_X3_1.jpg"
            />
            <Post
                profilePic="https://pbs.twimg.com/profile_images/1053717990171176962/rIDEHTl3_400x400.jpg"
                message="it is working !"
                timestamp="This is a timestamp!"
                username="Mohib Arsala"
                image="https://i.ndtvimg.com/i/2017-06/new-bmw-x3_827x510_81498548350.jpg"
            />
        </div>
    )
}

export default Feed
