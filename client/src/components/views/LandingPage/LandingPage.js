import React, { useEffect, useState } from 'react'
import { FaCode } from "react-icons/fa";
import { Card, Avatar, Col, Typography, Row,Icon } from 'antd';
import axios from 'axios';
import moment from 'moment';
import Silde from '../Silde/Silde';
import Search from '../Search/Search'
import './new.css'
const { Title } = Typography;
const { Meta } = Card;
function LandingPage(props) {

    const [Videos, setVideos] = useState([])
    const [Videos1, setVideos1] = useState([])

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                    const data=response.data.videos.reverse()
                    setVideos(data)
                    setVideos1(data)
                } else {
                    alert('Failed to get Videos')
                }
            })

            if(sessionStorage.getItem("userId")==null){
                console.log("Login First")
                props.history.push("/");
            }
    }, [])


    


    const renderCards = Videos1.map((video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        return <Col lg={6} md={8} xs={24} >
            <div   style={{ position: 'relative',paddingTop:'40%',paddingLeft:'-50%'}}>
                <a href={`/video/${video._id}`} >
                <img className="new"   style={{ width: '100%' }} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`} />
                <div className=" duration"
                    style={{ bottom: 0, right:0, position: 'absolute', margin: '4px', 
                    color: '#fff', backgroundColor: 'rgba(17, 17, 17, 0.8)', opacity: 0.8, 
                    padding: '2px 4px', borderRadius:'2px', letterSpacing:'0.5px', fontSize:'12px',
                    fontWeight:'500', lineHeight:'12px' }}>
                    <span>{minutes} : {seconds}</span>
                </div>
                </a>
            </div><br />
            <Meta
                avatar={
                    <Avatar src={video.writer.image} />
                }
                title={video.title}
            />
            <span>{video.writer.name} </span><br />
            <span style={{ marginLeft: '3rem' }}> {video.views}</span>
            - <span> {moment(video.createdAt).format("MMM Do YY")} </span>
        </Col>

    })

    const searchInput= (e)=>{
       
        let search=e.target.value
        if(search.length === 0){
            console.log("done")
            axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                    setVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
        }
        console.log("Videos -> ",Videos)
        var filterfood= Videos.filter((food)=>{
            if((food.category.toLowerCase()).includes((search.toLowerCase()))){
                return food;
            }
            
            else{
                return null;
            }
        })
       
        setVideos1(filterfood)
    }
    const searchInput1= (e)=>{
       
        let search=e.target.value
        if(search.length === 0){
            console.log("done")
            axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data)
                    setVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
        }
        console.log("Videos -> ",Videos)
        var filterfood= Videos.filter((food)=>{
            if((food.title.toLowerCase()).includes((search.toLowerCase()))){
                return food;
            }
            
            else{
                return null;
            }
        })
       
        setVideos1(filterfood)
    }
   

    return (
        <div style={{  margin: '2rem auto',color:'rgb(12, 12, 12)' }}>
            {/* <Title level={2} > About </Title> */}
            {/* <hr />
            <Silde></Silde> */}
            <div className="newabc"  style={{position: 'fixed', zIndex: 1,marginTop:'-1.9%', width: '100%',background:"white"}} >
            <Search className="searchbox" searchInput={(e)=>searchInput1(e)} searchIt={()=>this.state.search}/>
           
       
            {/* <hr /> */}

            <div className="scroll">
            <button className="btn" value="" onClick={searchInput}>All Videos</button>
            <button className="btn" value="Autos & Vehicles" onClick={searchInput}>Autos & Vehicles</button>
            <button className="btn" value="Film & Animation" onClick={searchInput}>Film & Animation</button>
            <button className="btn" value="Pets & Animals" onClick={searchInput}>Pets & Animals</button>
            <button className="btn" value="Music" onClick={searchInput}>Music</button>
            <button className="btn" value="Sports" onClick={searchInput}>Sports</button>
            <button className="btn" value="Food" onClick={searchInput}>Food</button>

           <button className="btn" value="Serial" onClick={searchInput}>Serial</button>
           <button className="btn" value="Craft" onClick={searchInput}>Craft</button>
           {/* <Icon type="right" /> */}
           </div>
           </div>
           <div style={{color:'#f4f6f8' }}>
             <Title level={2} > Vidoes List </Title>

            <Row  gutter={30}  >
                {renderCards}
            </Row>
            </div>
        </div>
    )
}

export default LandingPage
