import React from 'react';
import { Menu } from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    <Menu.Item key="mail">
      <a href="/">Home</a>
    </Menu.Item>
    <Menu.Item key="subscription">
      <a href="/subscription">Registered</a>
    </Menu.Item>
    <Menu.Item key="rules">
      <a href="/rules">Rules</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu