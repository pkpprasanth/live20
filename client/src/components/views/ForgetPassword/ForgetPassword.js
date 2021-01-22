import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from "react-redux";
import axios from 'axios';
import {
  Form,
  Input,
  Button,
} from 'antd';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

function ForgrtPassword(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        email: '',
        
      }}
      validationSchema={Yup.object().shape({
       
        email: Yup.string()
          .email('Email is invalid')
          .required('Email is required')
      })}
      onSubmit={(values, { setSubmitting }) => {
        const rand = Math.floor(1 + Math.random() * (100 - 1));
        var res = values.email.split("@");
        
        setTimeout(() => {
          let dataToSubmit = {
            email: values.email,
            password:res[0]+rand,
            type:'reset'
          };
          axios.post('/api/users/reset', dataToSubmit)
          .then(response => {
              if (response.data.success) {
                  // alert('video Uploaded Successfully')
                  axios.post('/api/sendMail', dataToSubmit)
                  alert('Password Reset Successfully and check your Email')
                  props.history.push("/");
                  // props.history.push('/')
              } else {
                  alert('Invalid Email ID')
              }
          })
            
           

          setSubmitting(false);
        }, 100);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset,
        } = props;
        return (
          <div className="app">
            <h2>Forget Password</h2>
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >
              <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Input
                  id="email"
                  placeholder="Enter your Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

             

              <Form.Item {...tailFormItemLayout}>
                <Button onClick={handleSubmit} type="primary" disabled={isSubmitting}>
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};


export default ForgrtPassword
