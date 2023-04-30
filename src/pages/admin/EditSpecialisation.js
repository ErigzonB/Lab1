import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Dashboard from './Dashboard.js';


const EditSpecialisation = () => {
    var index = 1;
    const navigate = useNavigate();
    const params = useParams();
    const [specialisations, setSpecialisations] = useState([]);
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        try {
            const res = await axios.put(`https://localhost:44333/api/specialisations/${params.id}`, {
                name
            })
            navigate('/specialisations');
        } catch (error) {
            console.log(error)
        }
    }

    const getOneSpecialisation = async () => {
        try {
            const res = await axios.get(`https://localhost:44333/api/specialisations/${params.id}`);
            setName(res.data.name)
        } catch (error) {
            console.log(error)
        }
    }

    const fetchAllSpecialisations = async () => {
        try {
            const res = await axios.get('https://localhost:44333/api/specialisations')
            setSpecialisations(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteSpecialisation = async (id) => {
        try {
            const res = await axios.delete(`https://localhost:44333/api/specialisations/${id}`)
            await fetchAllSpecialisations()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllSpecialisations();
        getOneSpecialisation();
    }, [])

    return (
        <div >
            <Dashboard >
                <div className='w-100 d-flex flex-column  align-items-center'>
                    <div className='d-flex  w-100 mt-4  pb-2 justify-content-center'>
                        <form className='d-flex flex-row align-items-start  gap-2'
                            onSubmit={(e) => {
                                e.preventDefault();
                                handleSubmit()
                            }}>
                            <input className="form-control"
                                onChange={(e) => {
                                    setName(e.target.value)
                                }} value={name} placeholder="sheno emrin" />
                            <button className='btn btn-primary'>Perditso</button>
                        </form>
                    </div>
                    <table className="table table-bordered border-primary w-75">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Emri</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                specialisations.map((specialisations) => {
                                    return <tr key={specialisations.specialisationId}>
                                        <th scope="row">{index++}</th>
                                        <td>{specialisations.name}</td>
                                        <td><button type="button" className="btn btn-primary" onClick={() => navigate(`/specialisations/edit/${specialisations.specialisationId}`)} >Edit</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => deleteSpecialisation(specialisations.specialisationId)}>Delete</button></td>
                                    </tr>
                                }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </Dashboard>
        </div>
    )
}

export default EditSpecialisation