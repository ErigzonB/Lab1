import axios from 'axios';
import { useFormik } from 'formik';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


const Register = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {},
        validationSchema: Yup.object().shape({
            name: Yup.string().required(),
            surname: Yup.string().required(),
            email: Yup.string().email().required(),
            address: Yup.string().required(),
            specialisationid: Yup.string().required('Select the specialisation'),
            countryid: Yup.string().required('Select the state'),
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
                const res = await axios.post('https://localhost:44333/api/auth/register-doctor', {
                    name: values.name,
                    surname: values.surname,
                    email: values.email,
                    username: values.email,
                    address: values.address,
                    password: values.password,
                    specialisationid: values.specialisationid,
                    countryid: values.countryid,
                })
                navigate('/doctors')
            } catch (error) {
                console.log(error)
            }
        }
    })

    const [specialisations, setSpecialisations] = useState([]);
    const [countries, setCountries] = useState([]);

    const fetchAllSpecialisations = async () => {
        try {
            const res = await axios.get('https://localhost:44333/api/specialisations')
            setSpecialisations(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchAllCountries = async () => {
        try {
            const res = await axios.get('https://localhost:44333/api/countries')
            setCountries(res.data)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        fetchAllSpecialisations();
        fetchAllCountries();
    }, [])

    return (
        <div className='bg-light'>
            <div className='container min-vh-100'>
                <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                    <form onSubmit={(e) => {
                        e.preventDefault()
                        formik.handleSubmit()
                    }} className='p-5 col-12 col-md-8 col-lg-6 row border bg-white position-relative rounded'>
                        <p style={{ background: "-webkit-linear-gradient(left, #0072ff, #8811c5)", height: "5rem" }} className='text-white text-center position-absolute top-0 start-0 fs-3 d-flex justify-content-center align-items-center'>Regjister Per Doktor</p>
                        <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                            <label htmlFor="inputName4" className="form-label text-start">Emri</label>
                            <input onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    name: e.target.value
                                }))
                            }} value={formik.values.name} type="text" className="form-control" id="inputName4" />
                            <span className='text-danger text-start'>{formik.errors.name}</span>
                        </div>
                        <div className="mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start">
                            <label htmlFor="inputSurname4" className="form-label text-start">Mbiemri</label>
                            <input onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    surname: e.target.value
                                }))
                            }} value={formik.values.surname} type="text" className="form-control" id="inputSurname4" />
                            <span className='text-danger text-start'>{formik.errors.surname}</span>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputEmail" className="form-label text-start">Email</label>
                            <input onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    email: e.target.value
                                }))
                            }} value={formik.values.email} type="email" className="form-control" id="inputEmail" />
                            <span className='text-danger text-start'>{formik.errors.email}</span>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputPassword" className="form-label text-start">Fjalkalimi</label>
                            <input onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    password: e.target.value
                                }))
                            }} value={formik.values.password} type="password" className="form-control" id="inputPassword" />
                            <span className='text-danger text-start'>{formik.errors.password}</span>
                        </div>
                        <div className="col-12 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputAddress" className="form-label text-start">Adresa</label>
                            <input onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    address: e.target.value
                                }))
                            }} value={formik.values.address} type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                            <span className='text-danger text-start'>{formik.errors.address}</span>
                        </div>

                        <div className="col-12 col-md-6 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputSpecialisation" className="form-label text-start">Specializimi</label>
                            <select onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    specialisationid: e.target.value
                                }))
                            }} id="inputSpecialisation" className="form-select">
                                {
                                    specialisations.map((specialisation, index) => (
                                        <option key={index} value={specialisation.specialisationId}>{specialisation.name}</option>
                                    ))
                                }
                            </select>
                            <span className='text-danger text-start'>{formik.errors.specialisationid}</span>
                        </div>
                        <div className="col-12 col-md-4 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputState" className="form-label text-start">Shteti</label>
                            <select id="inputState" className="form-select" onChange={(e) => {
                                formik.setValues((prev) => ({
                                    ...prev,
                                    countryid: e.target.value
                                }))
                            }}>
                                {
                                    countries.map((country, index) => (
                                        <option key={index} value={country.countryId}>{country.name}</option>
                                    ))
                                }
                            </select>
                            <span className='text-danger text-start'>{formik.errors.countryid}</span>
                        </div>
                        {/* 
                        <div className="col-12 col-md-6 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputGender" className="form-label text-start">Gjinia</label>
                            <select id="inputGender" className="form-select">
                                <option value='Choose'>Zgjidh...</option>
                                <option>...</option>
                            </select>
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputCity" className="form-label text-start">Qyteti</label>
                            <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="col-12 col-md-2 d-flex flex-column align-items-start mt-3">
                            <label htmlFor="inputZip" className="form-label text-start">Zip</label>
                            <input type="text" className="form-control" id="inputZip" />
                        </div>
                        */}
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

export default Register
