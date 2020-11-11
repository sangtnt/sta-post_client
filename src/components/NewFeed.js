import React, {Component} from "react";
import { Button, TextareaAutosize } from '@material-ui/core';
class NewFeed extends Component{
    render(){
        return(
            <div className="newfeed">
                <div className="box">
                    <div className="post-status">
                        <div className="post-header">
                            <img className="small-avatar" src="./Logo.png" alt=""/>
                            <div className="status-box">What are you thinking?</div>
                        </div>
                    </div>
                </div>
                <div className="box">
                    <div className="post-status">
                        <div className="post-header">
                            <img className="small-avatar" src="./Logo.png" alt=""/>
                            <div className="info">
                                <div className="name">Tấn Sang</div>
                                <div className="time">10 hours ago  <i class="fas fa-globe-europe"></i></div>
                            </div>
                            <div className="config">
                                <div><i class="fas fa-ellipsis-h"></i></div>
                            </div>
                        </div>
                        <div className="post-body">
                            <div className="status">
                                I'm sad
                            </div>
                            <div className="image">
                                <img src="./Logo.png" alt=""/>
                            </div>
                            <div className="likes">
                                <div><i class="fas fa-thumbs-up"></i></div>
                                <span>8</span>
                            </div>
                            <div className="action">
                                <div class="post-btn"><i class="far fa-thumbs-up"></i>Like</div>
                                <div class="post-btn"><i class="far fa-comment-dots"></i>Comment</div>
                                <div class="post-btn"><i class="far fa-share-square"></i>Share</div>
                            </div>
                            <div className="comment">
                                <div className="comment-box">
                                    <img className="small-avatar" src="./Logo.png" alt=""/>
                                    <TextareaAutosize aria-label="empty textarea" placeholder="Comment" />
                                    <Button>Post</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default NewFeed;