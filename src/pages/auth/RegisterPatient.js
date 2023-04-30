import axios from 'axios';
import { useFormik } from 'formik';
import React  from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


const RegisterPatient = () => {
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {},
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            surname: Yup.string().required(),
            email: Yup.string().email().required(),
            address: Yup.string().required(),
            password: Yup
                .string()
                .required('Please Enter your password')
                .matches(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                    "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
                ),
        }),
        onSubmit: async (values) => {
            try {
                const res = await axios.post('https://localhost:44333/api/auth/register-patient', {
                    name: values.name,
                    surname: values.surname,
                    username: values.email,
                    email: values.email,
                    address: values.address,
                    password: values.password,
                   
                })
                navigate('/patients')
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
                        <p style={{ background: "-webkit-linear-gradient(left, #0072ff, #8811c5)", height: "5rem" }} className='text-white text-center position-absolute top-0 start-0 fs-3 d-flex justify-content-center align-items-center'>Regjister Per Pacient</p>
                        <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                            <label htmlFor="inputName" className="form-label text-start">Emri</label>
                            <input type="text" className="form-control" id="inputName" onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    name: e.target.value
                                }))
                            }} value={formik.values.name} />
                             <span className='text-danger text-start'>{formik.errors.name}</span>
                        </div>
                        <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                            <label htmlFor="inputSurname" className="form-label text-start">Mbiemri</label>
                            <input type="text" className="form-control" id="inputSurname" onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    surname: e.target.value
                                }))
                            }} value={formik.values.surname} />
                            <span className='text-danger text-start'>{formik.errors.surname}</span>
                        </div>
                        <div className=' pt-3 col-12 col-md-6 d-flex flex-column justify-content-start'>
                            <label htmlFor="inputEmail4" className="form-label text-start">Email</label>
                            <input type="email" className="form-control" id="inputEmail4" onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    email: e.target.value
                                }))
                            }} value={formik.values.email} />
                             <span className='text-danger text-start'>{formik.errors.email}</span>
                        </div>
                        <div className=" pt-3 col-12 col-md-6 d-flex flex-column justify-content-start ">
                            <label htmlFor="inputPassword4" className="form-label text-start">Fjalkalimi</label>
                            <input type="password" className="form-control" id="inputPassword4" onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    password: e.target.value
                                }))
                            }} value={formik.values.password} />
                             <span className='text-danger text-start'>{formik.errors.password}</span>
                        </div>
                        <div className="col-12 d-flex flex-column justify-content-start mt-3">
                            <label htmlFor="inputAddress" className="form-label text-start">Adresa</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    address: e.target.value
                                }))
                            }} value={formik.values.address} />
                             <span className='text-danger text-start'>{formik.errors.address}</span>
                        </div>
                        {/* <div className="col-12 d-flex flex-column justify-content-start mt-3">
                            <label htmlFor="inputAddress2" className="form-label text-start">Address 2</label>
                            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column justify-content-start mt-3">
                            <label htmlFor="inputState" className="form-label text-start">State</label>
                            <select id="inputState" className="form-select">
                                <option value='Choose'>Choose...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column justify-content-start mt-3">
                            <label htmlFor="inputCity" className="form-label text-start">City</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-12 col-md-2 d-flex flex-column justify-content-start mt-3">
                            <label htmlFor="inputZip" className="form-label text-start">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div> */}
                        <div className="col-12 d-flex mt-4 ">
                            <button type="submit" className="btn btn-primary">Apliko</button>
                            <label className='ms-3'>Tashmë keni një llogari? <Link to='/login' className='text-decoration-none'>Kyçu këtu</Link></label>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default RegisterPatient