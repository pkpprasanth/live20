import React, { Component } from 'react'
import './rules.css'

export default class Rules extends Component {
    render() {
        return (
            <div id='data'>
    <div className="main1">
        <div>
        <h1>Rules and regulation</h1>
        <ul>
            <li> 👉 Video must be in .mp4 format</li>
            <li> 👉 GIF not support</li>
            <li> 👉 Network speed more than 1MB/Sec</li>
            <li> 👉 Video must be more than 10sec</li>
        </ul>
    </div>
    <div>
        <h1>User Manual</h1>
        <ol>
            <li>  👉 When You are newly enter in Live20.You must Signup and Signin then only you can upload video</li>
            <li>  👉 Once You are Signup and Signin.In right side corner there is one upload button there only you can able to upload the video </li>
            <li>  👉 Enter the Title name and Description</li>
            <li>  👉 Set Whether the video are Public or Private</li>
            <li>  👉 Whatever the video is register.You can see those video in Register Column</li>
            <li>  👉 Once you can logout.Next time you must login</li>
        </ol>
    </div>
        <h4 className="live"> Stay Connect with 😍  Live20</h4>
        </div>
</div>   
        )
    }
}
