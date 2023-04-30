import { Container, Row, Col } from "react-bootstrap";
import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const ContactUs = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {},
    validationSchema: Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      message: Yup.string().required()

    }),
    onSubmit: async (values) => {
      try {
        const res = await axios.post('https://localhost:44333/api/contacts', {
          name: values.name,
          email: values.email,
          message: values.message,
        })
        navigate('/contacts')
      } catch (error) {
        console.log(error)
      }
    }
  })

  return (
    <div className="pt-4 bg-secondary text-black" >
      <Container>
        <Row>
          <Col lg="8">
            <h1 className="display-4 mb-4">Na Kontaktoni</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>
        <Row className="sec_sp">
          <Col lg="5" className="mb-5">
            <h3 className="color_sec py-4">Qëndroni Në Kontakt</h3>
            <address>
              <h4>Email:</h4>
              <h6>al55544@ubt-uni.net</h6>
              <h6>dz52352@ubt-uni.net</h6>
              <br />
              <h4>Phone:</h4>
              <h6>+38345472620</h6>
              <h6>+38349924052</h6>
              <br />
              <h6>Projekti jone ne LAB Course 1 "Programim"!
                Per Kritika, Sygjerime, Pyetje, apo edhe Lavdata na kontaktoni!</h6>
            </address>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <form onSubmit={(e) => {
                        e.preventDefault()
                        formik.handleSubmit()
                    }} className="contact__form w-100">
              <Row>
                <Col lg="6" className="form-group mb-4">
                  <input onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    name: e.target.value
                                }))
                            }} value={formik.values.name}
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder="Name"
                    type="text"
                    required
                  />
                  <span className='text-danger text-start'>{formik.errors.name}</span>
                </Col>
                <Col lg="6" className="form-group mb-4">
                  <input onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    email: e.target.value
                                }))
                            }} value={formik.values.email}
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="email"
                    required
                  />
                  <span className='text-danger text-start'>{formik.errors.email}</span>
                </Col>
              </Row>
              <textarea onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    message: e.target.value
                                }))
                            }} value={formik.values.message}
                className="form-control"
                id="message"
                name="message"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
              <span className='text-danger text-start'>{formik.errors.message}</span>
              <br />
              <Row>
                <Col lg="12" className="form-group">
                  <button className="btn ac_btn btn-primary mb-4" type="submit">
                    Send
                  </button>
                </Col>
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ContactUs