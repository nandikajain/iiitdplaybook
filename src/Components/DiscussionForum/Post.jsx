import React from "react";
import {Avatar } from '@material-ui/core';
import { AvatarGroup } from '@material-ui/lab';

function Post(props)
{
    const tags = props.tags;
    return (
        <>
        <div className="row card-shadow m-0 h-100 pt-2 pb-3 mb-4">
          <div className="col-12">
            <p className="blue pull-left pl-1 fw-600">ID: #{props.id} </p>
          </div>
          <div className="col-md-1 col-2 m-0 p-0" >
            <div className="center">
              <div className="row ">
                <div className="col-12 m-0 p-0">
                  <i className="fa fa-sort-up fa-2x blue mb-0 pb-0" />
                </div>
                <div className="col-12 m-0 p-0">
                  <h5 className="blue fw-600 pt-0 mt-0">{props.likes}</h5>
                </div>
              </div>
            </div>
          </div>
          <div className="col-1 d-md-none d-lg-none"> 

          </div>
          <div className="col-md-7 col-8">
            <div className="row ">
              <div className="col-12 m-0 p-0">
                <h5 className="gray left m-0 p-0 pb-2 fw-500 pl-1">{props.question} </h5>
              </div>
              <div className="col-12 m-0 p-0">
                <p className="pl-1 pb-0 m-0">
                  Asked when: {props.date}
                </p>

              </div>
              <div className="col-12 m-0 p-0">
                  <p className="pl-1 pt-0 m-0">
                    Tags: { tags.map((tag)=>{
                        return (<span class="badge badge-secondary mr-1">{tag}</span>);
                    })
                    }
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
                  <p style={{fontSize:"80%"}}>{props.likes} likes</p>
              </div>
            </div>
          </div>
        </div>

        </>
    );
}
export default Post;