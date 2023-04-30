import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard.js';
import  { useNavigate } from 'react-router-dom';



const Patients = () => {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();

    const fetchAllPatients = async () => {
        try {
            const res = await axios.get('https://localhost:44333/api/patient/get-patients')
            setPatients(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`https://localhost:44333/api/patient/delete-patient/${id}`)
            await fetchAllPatients()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllPatients();
    }, [])

    return (
        <div >
            <Dashboard >
                <div className='w-100'>
                    <table className="table table-bordered border-primary ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Emri</th>
                                <th scope="col">Mbiemri</th>
                                <th scope="col">Gjinia</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                patients.map((patient, index) => {

                                    return <tr key={patient.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{patient.name}</td>
                                        <td>{patient.surename}</td>
                                        <td>N/A</td>
                                        <td><button type="button" className="btn btn-primary" onClick={()=>navigate(`/patients/edit/${patient.id}`)}>Edit</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => deleteUser(patient.id)}>Delete</button></td>
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

export default Patients