import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const AddDrug = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {},
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            date: Yup.string().required(),
        }),
        onSubmit: async (values) => {
            try {
                const res = await axios.post('https://localhost:44333/api/drugs', {
                    name: values.name,
                    date: values.date,
                })
                navigate('/drugs')
            } catch (error) {
                console.log(error)
            }
        }
    })
    return (
        <div className='bg-light'>
            <div className='container min-vh-100'>
                <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                    <form className='p-5 col-12 col-md-8 col-lg-6 row border bg-white position-relative rounded' onSubmit={(e) => {
                        e.preventDefault()
                        formik.handleSubmit()
                    }}>
                        <p style={{ background: "-webkit-linear-gradient(left, #0072ff, #8811c5)", height: "5rem" }} className='text-white text-center position-absolute top-0 start-0 fs-3 d-flex justify-content-center align-items-center'></p>
                        <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                            <label htmlFor="inputName" className="form-label text-start">Emri</label>
                            <input id='inputDate' type="text" className="form-control" onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    name: e.target.value
                                }))
                            }} value={formik.values.name} />
                            <span className='text-danger text-start'>{formik.errors.name}</span>
                        </div>
                        <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                            <label htmlFor="inputDate" className="form-label text-start">Data e Skadimit</label>
                            <input id='inputTime' type="date" className="form-control" onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    date: e.target.value
                                }))
                            }} value={formik.values.date} />
                            <span className='text-danger text-start'>{formik.errors.date}</span>
                        </div>
                        <div className="col-12 d-flex mt-4 ">
                            <button type="submit" className="btn btn-primary">Shto</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddDrug