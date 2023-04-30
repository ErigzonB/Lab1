import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard.js';


const Cities = () => {
    const navigate = useNavigate();
    const [cities, setCities] = useState([]);
    const [name, setName] = useState('');

    const handleSubmit = async () => {
        try {
            const res = await axios.post('https://localhost:44333/api/cities', {
                name
            })
            fetchAllCities();
        } catch (error) {
            console.log(error)
        }
    }

    const fetchAllCities = async () => {
        try {
            const res = await axios.get('https://localhost:44333/api/cities')
            setCities(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteCity = async (id) => {
        try {
            const res = await axios.delete(`https://localhost:44333/api/cities/${id}`);
            fetchAllCities();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllCities();
    }, [])

    return (
        <div>
            <Dashboard>
                <div className='w-100 d-flex flex-column  align-items-center'>
                    <div className='d-flex  w-100 mt-4  pb-2 justify-content-center'>
                        <form className='d-flex flex-row align-items-start gap-2'
                            onSubmit={() => {
                                handleSubmit()
                            }}>
                            <input className="form-control"
                                placeholder="sheno emrin" onChange={(e) => {
                                    setName(e.target.value)
                                }} value={name} />
                            <button className='btn btn-success'>Shto</button>
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
                                cities.map((city, index) => {
                                   return <tr key={city.cityId}>
                                        <th scope="row">{index+1}</th>
                                        <td>{city.name}</td>
                                        <td><button type="button" className="btn btn-primary" onClick={() => navigate(`/cities/edit/${city.cityId}`)}>Edit</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => deleteCity(city.cityId)}>Delete</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </Dashboard>
        </div>
    )
}

export default Cities