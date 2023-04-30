
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Dashboard from './Dashboard.js';


const EditCountry = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [countries, setCountries] = useState([]);
    const [name, setName] = useState('');
    

    const handleSubmit = async () => {
        try {
            const res = await axios.put(`https://localhost:44333/api/countries/${params.id}` , {
                name  
            })
            navigate('/countries');
        } catch (error) {
            console.log(error)
        }
    }

    const getOneCountry = async () =>{
        try {
            const res = await axios.get(`https://localhost:44333/api/countries/${params.id}`);
            setName(res.data.name)
        }catch(error){
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

    const deleteCountry = async (id) => {
        try {
            const res = await axios.delete(`https://localhost:44333/api/countries/${id}`);
            fetchAllCountries();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllCountries();
        getOneCountry();
    }, [])
    return (
        <div>
            <Dashboard>
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
                            }}  value={name} placeholder="sheno emrin"/>
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
                                countries.map((country, index) => {
                                    return <tr key={country.countryId}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{country.name}</td>
                                        <td><button type="button" className="btn btn-primary" onClick={() => navigate(`/countries/edit/${country.countryId}`)}>Edit</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => deleteCountry(country.countryId)} >Delete</button></td>
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

export default EditCountry