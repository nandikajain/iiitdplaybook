import './DiscussionForum.css';
import firebase from 'firebase';
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import {Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';



function DiscussionForum()
{
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
        <div className="row card-shadow m-0 h-100 pt-2 pb-3">
          <div className="col-12">
            <p className="blue pull-left pl-1 fw-600">ID: #123</p>
          </div>
          <div className="col-md-1 col-2 m-0 p-0" >
            <div className="center">
              <div className="row ">
                <div className="col-12 m-0 p-0">
                  <i className="fa fa-sort-up fa-2x blue mb-0 pb-0" />
                </div>
                <div className="col-12 m-0 p-0">
                  <h5 className="blue fw-600 pt-0 mt-0">10</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 d-md-none d-lg-none"> 

          </div>
          <div className="col-md-7 col-8">
            <div className="row ">
              <div className="col-12 m-0 p-0">
                <h5 className="gray left m-0 p-0 pb-2 fw-500 pl-1"> What’s your favorite Product and why?</h5>
              </div>
              <div className="col-12 m-0 p-0">
                <p className="pl-1 pb-0 m-0">
                  Asked when:
                </p>

              </div>
              <div className="col-12 m-0 p-0">
                  <p className="pl-1 pt-0 m-0">
                    Tags:
                  </p>

              </div>
            </div>
          </div>
          <div className="col-1"> 

          </div>
          <div className="col-md-3 d-sm-none d-md-block d-none">
            <div className="row">
              <div className="col-12 pb-3">
                <AvatarGroup max={3}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                  <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                  <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
              </div>
              <div className="col-12">
                  <p style={{fontSize:"80%"}}>10 likes, 25 comments</p>
              </div>

            </div>

          </div>


        </div>





      </div>

    </>)
}
export default DiscussionForum;