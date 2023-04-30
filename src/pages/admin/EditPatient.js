import axios from 'axios';
import { Link, useNavigate, useParams} from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const EditPatient = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [patient, setPatient] = useState({
        name: '',
        surname: '',
        address: '',
    });

    const handleSubmit = async () => {
        try {
            const res = await axios.put(`https://localhost:44333/api/patient/${params.id}`, {
                name: patient.name,
                surname: patient.surname,
                address: patient.address,
                specialisationId: patient.specialisationId,
            })

            navigate('/patients');
        } catch (error) {
            console.log(error.response)
        }
    }
    const fetchPatient = async () => {
        try {
            const res = await axios.get(`https://localhost:44333/api/patient/${params.id}`)
            console.log(res)
            setPatient({
                name: res.data.name,
                surname: res.data.surename,
                address: res.data.address,
            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchPatient();
    }, [])

    return (
        <div className='bg-light'>
            <div className='container min-vh-100'>
                <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                    <form className='p-5 col-12 col-md-8 col-lg-6 row border bg-white position-relative rounded' onSubmit={(e) => {
                        e.preventDefault();
                        handleSubmit();
                    }}>
                        <p style={{ background: "-webkit-linear-gradient(left, #0072ff, #8811c5)", height: "5rem" }} className='text-white text-center position-absolute top-0 start-0 fs-3 d-flex justify-content-center align-items-center'>Perditesim Per Pacient</p>
                        <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                            <label htmlFor="inputName" className="form-label text-start">Emri</label>
                            <input type="text" className="form-control" id="inputName"  value={patient.name} onChange={(e) => {
                                setPatient((prev) => ({
                                    ...prev,
                                    name: e.target.value
                                }))
                            }}/>

                        </div>
                        <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                            <label htmlFor="inputSurname" className="form-label text-start">Mbiemri</label>
                            <input type="text" className="form-control" id="inputSurname" value={patient.surname} onChange={(e) => {
                                setPatient((prev) => ({
                                    ...prev,
                                    surname: e.target.value
                                }))
                            }}/>
                        </div>
                        <div className="col-12 d-flex flex-column justify-content-start mt-3">
                            <label htmlFor="inputAddress" className="form-label text-start">Adresa</label>
                            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={patient.address} onChange={(e) => {
                                setPatient((prev) => ({
                                    ...prev,
                                    address: e.target.value
                                }))
                            }}/>

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
                            <button type="submit" className="btn btn-primary">Perditso</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditPatient