import React from 'react'
import {Icon} from 'antd';

function Footer() {
    return (
        <div style={{
            height: '80px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem',color:'block',
            backgroundImage: 'linear-gradient(260deg,#ffffff 0%, #ffffff 100% )'
        }}>
           <p> pkp <Icon type="smile" /></p>
        </div>
    )
}

export default Footer
