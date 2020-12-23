import React, {useEffect, useState} from 'react'
import axios from 'axios';
function SideVideo() {

    const [SideVideos, setSideVideos] = useState([])

    useEffect(() => {
        axios.get('/api/video/getVideos')
            .then(response => {
                if (response.data.success) {
                    console.log(response.data.videos)
                    const data =response.data.videos
        
                    for (let i = 0; i < data.length; i++) {
                        for (let j = i + 1; j < data.length; j++) {
                          if (data[i].views < data[j].views) {
                            let temp = data[i];
                            data[i] = data[j];
                            data[j] = temp;
                          }
                        }
                      }
                    
                    console.log(data)
                    // data.sort((a, b) => (b.views - a.views))
                    // console.log(data)
                    setSideVideos(response.data.videos)
                } else {
                    alert('Failed to get Videos')
                }
            })
        

    }, [])

    const sideVideoItem = SideVideos.map(( video, index) => {

        var minutes = Math.floor(video.duration / 60);
        var seconds = Math.floor(video.duration - minutes * 60);

       return <div style={{ display: 'flex', marginTop: '1rem', padding: '0 2rem' }}>
        <div style={{ width:'40%', marginRight:'1rem' }}>
            <a href={`/video/${video._id}`}  style={{ color:'black' }}>
                <img style={{ width: '100%' }} src={`http://localhost:5000/${video.thumbnail}`} alt="thumbnail" />
            </a>
        </div>

        <div style={{ width:'50%' }}>
            <a href={`/video/${video._id}`} style={{ color:'black' }}>
                <span style={{ fontSize: '1rem', color: 'black' }}>{video.title}  </span><br />
                <span>{video.writer.name}</span><br />
                <span>{video.views}</span><br />
                <span>{minutes} : {seconds}</span><br />
            </a>
        </div>
    </div>
    })

    return (
        <React.Fragment>
            <div style={{ marginTop:'3rem' }}></div>
            {sideVideoItem}


        </React.Fragment>
        
       
    )
}

export default SideVideo
