import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import jwt_decode from 'jwt-decode';

const LoginForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup
        .string()
        .required('Please Enter your password')
    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post('https://localhost:44333/api/auth/login', {
          email: values.email,
          password: values.password,

        })
        var token = res.data.token;
        var decoded = jwt_decode(token);
        var role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role']
        console.log(role);
        if(role ==='Doctor'){
          navigate('/DrDashboard');
        }else if(role ==='Admin'){
          navigate('/Dashboard');
        }else if(role ==='Patient'){
          navigate('/PDashboard');
        }else{
          console.log("User-i nuk ekgziston")
        }
      } catch (error) {
        console.log(error)
      }
    }
  })
  return (
    <div className='bg-light'>
      <div className='container min-vh-100'>
        <div className='min-vh-100 d-flex justify-content-center align-items-center'>
          <form className=' p-5 col-12 col-md-8 col-lg-6 row border bg-white position-relative rounded ' onSubmit={(e) => {
            e.preventDefault()
            formik.handleSubmit()
          }}>
            <div style={{ background: "-webkit-linear-gradient(left, #0072ff, #8811c5)", height: "5rem" }} className='text-white text-center position-absolute top-0 start-0 fs-3 d-flex justify-content-center align-items-center'></div>
            <div className='mt-5 pt-3 col-12 col-md-12 d-flex flex-column justify-content-start'>
              <label htmlFor="inputEmail4" className="form-label text-start">Email</label>
              <input type="email" className="form-control" id="inputEmail4" onChange={(e) => {
                formik.setValues((prev) => ({
                  ...prev,
                  email: e.target.value
                }))
              }} value={formik.values.email} />
              <span className='text-danger text-start'>{formik.errors.email}</span>
            </div>
            <div className="mt-4 col-12 col-md-12 d-flex flex-column justify-content-start ">
              <label htmlFor="inputPassword4" className="form-label text-start">Password</label>
              <input type="password" className="form-control" id="inputPassword4" onChange={(e) => {
                formik.setValues((prev) => ({
                  ...prev,
                  password: e.target.value
                }))
              }} value={formik.values.password} />
              <span className='text-danger text-start'>{formik.errors.password}</span>
            </div>
            <div className="col-12 d-flex mt-4 ">
              <button type="submit" className="btn btn-primary">Kyçu</button>
              <label className='ms-3'>Nëse nuk keni një llogari, <Link to='/register' className='text-decoration-none'>regjistrohu këtu</Link></label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginForm