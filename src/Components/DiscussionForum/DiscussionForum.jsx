import './DiscussionForum.css';
import firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Post from './Post'
import {Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';





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
  const [expand, setExpanded] = useState(false);
  const isModerator = true;
  function handleSubmit(event)
  {
    event.preventDefault();

  }
  function handleExpand()
  {
    setExpanded(true);
  }
  const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  }));
  
  const classes = useStyles();
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
        {/* Moderator */}
      <div className="container m-auto pb-4">


        <div className="row moderator pt-2 pb-2">
          <div className="col-1 d-none d-sm-block pr-0 mr-0">
            <Avatar alt="Remy Sharp" src="https://picsum.photos/200/300?random=5" />
          </div>
          <div className="col-1 d-none d-sm-block d-md-none">

          </div>

          <div className="col-md-11 col-sm-10 col-12 pl-0 mr-0">
            <form onSubmit={handleSubmit}>
            <textarea
              className="w-100"
              name="content"
              style={{resize:"none"}}
              placeholder ={isModerator? "Ask a question": "Apply to be a moderator"}
              rows={expand ? "3" : "1"}
              onClick={handleExpand}
            />
           { expand && <button type="button" class="btn ask pl-3 pr-3 pull-right">{isModerator? "Ask" : "Submit"}</button>
           } 

          </form>
          </div>
        </div>

        </div>
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