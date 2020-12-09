import React, { useEffect, useState } from 'react'
import { Card, Avatar, Col, Typography, Row } from 'antd';
import axios from 'axios';
import moment from 'moment';
const { Title } = Typography;
const { Meta } = Card;
function LandingPage() {

    const [Videos, setVideos] = useState([])
    
    useEffect(() => {
        var data1=[];
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                   
                    console.log(response.data)
                    for(let i=0;i<response.data.videos.length;i++){
                        if(sessionStorage.getItem('userId').includes(response.data.videos[i].writer._id)){
                           data1[i]=response.data.videos[i];
                        }
                    }
                    setVideos(data1)
                    // setVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
    }, [])


//     useEffect(() => {
// Videos.forEach=(ele)=>{
//     if(sessionStorage.getItem('userId')===ele.writer._id){
//         console.log("your id",ele.writer._id)
//     }
//     else{
//         console.log("else your id",ele.writer._id)

//     }
// }
//     })

    const renderCards = Videos.map((video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

        return <Col lg={6} md={8} xs={24} >
            <div className="new"  style={{ position: 'relative' }}>
                <a href={`/video/${video._id}`} >
                <img style={{ width: '100%' }} alt="thumbnail" src={`http://localhost:5000/${video.thumbnail}`} />
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

 
   

    return (
       
        <div style={{ width: '85%', margin: '3rem auto' }}>
            <hr />
            <h1>Hello</h1>
             <Title level={2} > Vidoes List </Title>
  
            <Row gutter={16} >
                {renderCards}
            </Row>
        </div>
    )
}

export default LandingPage
