import React from 'react';
import { Menu ,Icon} from 'antd';


function LeftMenu(props) {
  return (
    <Menu mode={props.mode}>
    {/* <Menu.Item key="mail">
      <a href="/"><Icon type="home" />Home</a>
    </Menu.Item>
    <Menu.Item key="subscription">
      <a href="/subscription"><Icon type="video-camera" />My Video's</a>
    </Menu.Item>
    <Menu.Item key="category">
      <a href="/category"><Icon type="menu-unfold"/>Category</a>
    </Menu.Item> */}
    <Menu.Item key="rules">
      <a href="/rules"><Icon type="double-right" />Rules</a>
    </Menu.Item>
    <Menu.Item key="contest">
      <a href="/contest"><Icon type="snippets" />Contest</a>
    </Menu.Item>
  </Menu>
  )
}

export default LeftMenu