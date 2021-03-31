import './DiscussionForum.css';
import firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';

import Post from './Post'



function DiscussionForum()
{
  const posts=[
    {
      question:"What’s your favorite Product and why?",
      likes:"10",
      tags:["Design", "IIITD"],
      id:1,
      date:""
    },
    {
      question:"What’s your favorite Product and why?",
      likes:"9",
      tags:["Laptop"],
      id:2,
      date:""
    },
    {
      question:"What’s your favorite Product and why?",
      likes:"8",
      tags:["Life", "IIITD", "Sad"],
      id:3,
      date:""
    },
    {
      question:"What’s your favorite Product and why?",
      likes:"2",
      tags:["Design"],
      id:4,
      date:""
    }
  ];
    return (<>
        <Navbar
        loggedIn={localStorage.getItem("isSignedIn")}
        colorStatus={true}
      />
      <div className="container p-5">
        <h1 className="heading fw-700">Heading 1</h1>
        <p className="gray pt-3">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        </p>
        {
          posts.map((post)=>{
            return (<Post 
              question = {post.question}
              likes = {post.likes}
              date = {post.date}
              key={post.id}
              id={post.id}
              tags={post.tags}
            />)
          })
        }
      </div>

    </>)
}
export default DiscussionForum;