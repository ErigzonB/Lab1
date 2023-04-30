import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';


const EditDrug = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [drug, setDrug] = useState({
        name: '',
        date: ''
    });
    const handleSubmit = async () => {
        try {
            const res = await axios.put(`https://localhost:44333/api/drugs/${params.id}`, {
                name: drug.name,
                date: drug.date
            })

            navigate('/drugs');
        } catch (error) {
            console.log(error.response)
        }
    }
    const fetchDrug = async () => {
        try {
            const res = await axios.get(`https://localhost:44333/api/drugs/${params.id}`)
            setDrug({
                name: res.data.name,
                date: res.data.date,

            })
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(() => {
        fetchDrug();
    }, [])

    return (
        <div className='bg-light'>
            <div className='container min-vh-100'>
                <div className='min-vh-100 d-flex justify-content-center align-items-center'>
                    <form className='p-5 col-12 col-md-8 col-lg-6 row border bg-white position-relative rounded' onSubmit={(e) => {
                        e.preventDefault()
                        handleSubmit()
                    }}>
                        <p style={{ background: "-webkit-linear-gradient(left, #0072ff, #8811c5)", height: "5rem" }} className='text-white text-center position-absolute top-0 start-0 fs-3 d-flex justify-content-center align-items-center'></p>
                        <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                            <label htmlFor="inputName" className="form-label text-start">Emri</label>
                            <input id='inputDate' type="text" className="form-control" value={drug.name} onChange={(e) => {
                                setDrug((prev) => ({
                                    ...prev,
                                    name: e.target.value
                                }))
                            }} />

                        </div>
                        <div className='mt-5 pt-3 col-12 col-md-6 d-flex flex-column align-items-start'>
                            <label htmlFor="inputDate" className="form-label text-start">Data e Skadimit</label>
                            <input id='inputTime' type="date" className="form-control" value={drug.date} onChange={(e) => {
                                setDrug((prev) => ({
                                    ...prev,
                                    drug: e.target.value
                                }))
                            }} />
                        </div>
                        <div className="col-12 d-flex mt-4 ">
                            <button type="submit" className="btn btn-primary">Perditeso</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default EditDrug