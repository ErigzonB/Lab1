import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import Dashboard from './Dashboard.js';


const Drugs = () => {
    const navigate = useNavigate();
    const [drugs, setDrugs] = useState([]);

    const fetchAllDrugs = async () => {
        try {
            const res = await axios.get('https://localhost:44333/api/drugs')
            setDrugs(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteDrug = async (id) => {
        try {
            const res = await axios.delete(`https://localhost:44333/api/drugs/${id}`);
            fetchAllDrugs();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllDrugs();
    }, [])
    return (
        <div>
            <Dashboard>
                <div className='w-100 d-flex flex-column  align-items-center'>
                    <div className='d-flex  w-100 mt-4  pb-2 justify-content-center'>
                        <form className='d-flex flex-row align-items-start gap-2'>
                            <Link to='/addDrugs' className='btn btn-primary '>Create</Link>
                        </form>
                    </div>
                    <table className="table table-bordered border-primary w-75">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Emri</th>
                                <th scope="col">Data e Skadimit</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                                drugs.map((drug, index) => {
                                   return <tr key={drug.id}>
                                        <th scope="row">{index+1}</th>
                                        <td>{drug.name}</td>
                                        <td>{drug.date}</td>
                                        <td><button type="button" className="btn btn-primary" onClick={() => navigate(`/drugs/edit/${drug.id}`)}>Edit</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => deleteDrug(drug.id)}>Delete</button></td>
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

export default Drugs