/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu,Icon } from 'antd';
import axios from 'axios';
import { USER_SERVER } from '../../../Config';
import { withRouter } from 'react-router-dom';
import { useSelector } from "react-redux";
const Upload = require('../../../../assets/images/upload.png');

function RightMenu(props) {
  const user = useSelector(state => state.user)

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        sessionStorage.clear()
        props.history.push("/");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  if (user.userData && !user.userData.isAuth) {
    
return (
      <Menu mode={props.mode}>
        <Menu.Item key="mail">
          <a href="/"><Icon type="login" />Signin</a>
        </Menu.Item>
        <Menu.Item key="app">
          <a href="/register"><Icon type="user-add" />Signup</a>
        </Menu.Item>
        
      </Menu>
     
      
    )
  } else {
    return (
      <Menu mode={props.mode}>
          <Menu.Item key="mail">
      <a href="/home"><Icon type="home" />Home</a>
    </Menu.Item>
    <Menu.Item key="subscription">
      <a href="/subscription"><Icon type="video-camera" />My Video's</a>
    </Menu.Item>
    <Menu.Item key="category">
      <a href="/category"><Icon type="menu-unfold"/>Category</a>
    </Menu.Item>
         <Menu.Item key="myprofile">
          <a href="/myprofile"><Icon type="user" />Myprofile</a>
        </Menu.Item>
        <Menu.Item key="changepassword">
          <a href="/change"><Icon type="edit" />ChangePassword</a>
        </Menu.Item>
        <Menu.Item key="create">
          <a href="/video/upload"><img src={Upload} alt="Upload" /></a>
        </Menu.Item>
        <Menu.Item key="logout">
          <a onClick={logoutHandler}><Icon type="logout" />Logout</a>
          
        </Menu.Item>
      </Menu>
    )
  }
  
}

export default withRouter(RightMenu);

