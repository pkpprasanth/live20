import React, {useEffect, useState } from 'react';
import LeftMenu from './Sections/LeftMenu';
import RightMenu from './Sections/RightMenu';
import { Drawer, Button, Icon } from 'antd';
import './Sections/Navbar.css';
import Search from '../Search/Search';
import axios from 'axios';

const Logo = require('../../../assets/images/White on Black.png');

function NavBar() {
  const [visible, setVisible] = useState(false)

//   const [Videos, setVideos] = useState([])
//   const [Videos1, setVideos1] = useState([])


//   useEffect(() => {
//     axios.get('/api/video/getVideos')
//         .then(response => {
//             if (response.data.success) {
//                 const data=response.data.videos.reverse()
//                 setVideos(data)
//                 setVideos1(data)
//             } else {
//                 alert('Failed to get Videos')
//             }
//         })
// }, [])

//   const searchInput1= (e)=>{
       
//     let search=e.target.value
//     if(search.length === 0){
//         console.log("done")
//         axios.get('/api/video/getVideos')
//         .then(response => {
//             if (response.data.success) {
//                 console.log(response.data)
//                 setVideos(response.data.videos)
//             } else {
//                 alert('Failed to get Videos')
//             }
//         })
//     }
//     var filterfood= Videos.filter((food)=>{
//         if((food.title.toLowerCase()).includes((search.toLowerCase()))){
//             return food;
//         }
        
//         else{
//             return null;
//         }
//     })
   
//     setVideos1(filterfood)
// }

  const showDrawer = () => {
    setVisible(true)
  };


  const onClose = () => {
    setVisible(false)
  };
 

  return (
    <nav  className="menu" style={{color: 'red' ,position: 'fixed', zIndex: 1, width: '100%',}}>  
    {/* background: 'coral' */}
      <div className="menu__logo">
        <a href="/"><img src={Logo} alt="Logo" style={{ width: '80%', marginTop: '-5px' }} /></a>
      </div>
      <div className="menu__container">
      {/* <Search className="searchbox" /> */}

        {/* <div className="menu_left">
          <LeftMenu mode="horizontal" />
        </div>
        <div className="menu_rigth">
          <RightMenu mode="horizontal" />
        </div> */}
        {/* <Button
          className="menu__new"
          type="primary"
          onClick={showDrawer1}
        >
          Menu<Icon type="menu-unfold" />
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="left"
          className="menu_drawer1"
          closable={false}
          onClose={onClose1}
          visible={visible1}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
        */}

        {/* <Search className="searchbox" searchInput={(e)=>searchInput1(e)} searchIt={()=>this.state.search}/> */}

        <Button
          className="menu__mobile-button1"
          type="primary"
          onClick={showDrawer}
        >
          <Icon type="align-right" /> Menu
        </Button>
        <Drawer
          title="Basic Drawer"
          placement="right"
          className="menu_drawer"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <LeftMenu mode="inline" />
          <RightMenu mode="inline" />
        </Drawer>
      </div>
    </nav>
  )
}

export default NavBar