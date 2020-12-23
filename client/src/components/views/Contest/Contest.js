import React, { useState } from 'react'
import { Typography, Button, Form, message, Input, Icon } from 'antd';
import Dropzone from 'react-dropzone';
import axios from 'axios';
import { useSelector } from "react-redux";

const { Title } = Typography;


const Catogory = [
    { value: 0, label: "2000" },
    { value: 1, label: "600" },
    { value: 2, label: "Free" }
    
]

function ContestPage(props) {
    const user = useSelector(state => state.user);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [MbNumber, setAddress] = useState("");
    const [Categories, setCategories] = useState("0")
    const [WANumber, setNumber] = useState("");
 


    const handleChangeName = (event) => {
        setName(event.currentTarget.value)
    }
    const handleChangeEmail = (event) => {
        setEmail(event.currentTarget.value)
    }

    const handleChangeAddress = (event) => {
        console.log(event.currentTarget.value)
        setAddress(event.currentTarget.value)
    }

    const handleChangeNumber = (event) => {
        console.log(event.currentTarget.value)
        setNumber(event.currentTarget.value)
    }



    const handleChangeTwo = (event) => {
        setCategories(event.currentTarget.value)
    }

    const onSubmit = (event) => {

        event.preventDefault();

        if (user.userData && !user.userData.isAuth) {
            return alert('Please Log in First')
        }

        if (name === "" || MbNumber === "" ||
            Categories === "" || WANumber==="" ||email==="") {
            return alert('Please first fill all the fields')
        }

        const variables = {
            name: name,
            MbNumber: MbNumber,
            category: Categories,
            email:email,
            WANumber:WANumber
        }

        axios.post('/api/contest/register', variables)
        
            .then(response => {
                
                if (response.data.success) {
                    alert(' Successfully Registered')
                    props.history.push('/')
                } else {
                    alert('Failed to Registered')
                }
            })

    }

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                <Title level={2} > Registration</Title>
            </div>

            <Form onSubmit={onSubmit}>
                <label>Name</label>
                <Input required
                    onChange={handleChangeName}
                    value={name}
                />
                 <label>What'app Number</label>
                <Input required
                    onChange={handleChangeNumber}
                    value={WANumber}
                />
                <br /><br />
                <label>Mobile Number</label>
                <Input required
                    onChange={handleChangeAddress}
                    value={MbNumber}
                />
                <br /><br />
                <label>Email</label>
                <Input required
                    onChange={handleChangeEmail}
                    value={email}
                />
                <br /><br />
                <label>Category</label>
                <select onChange={handleChangeTwo}>
                    {Catogory.map((item, index) => (
                        <option key={index} value={item.label}>{item.label}</option>
                    ))}
                </select>
                <br /><br />

                <Button style={{ textAlign: 'center', marginLeft: '20rem' }}
                 type="primary" size="large" onClick={onSubmit}>
                    Submit
            </Button>

            </Form>
        </div>
    )
}

export default ContestPage
