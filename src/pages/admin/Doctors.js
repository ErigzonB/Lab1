import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Dashboard from './Dashboard.js';
import  { useNavigate } from 'react-router-dom';



const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    const [specialisations, setSpecialisations] = useState([]);
    const [countries, setCountries] = useState([]);
    const navigate = useNavigate();

    const fetchAllDoctors = async () => {
        try {
            const res = await axios.get('https://localhost:44333/api/doctors/get-doctors')
            setDoctors(res.data)
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
    const fetchAllCountries = async () => {
        try {
            const res = await axios.get('https://localhost:44333/api/countries')
            setCountries(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteUser = async (id) => {
        try {
            const res = await axios.delete(`https://localhost:44333/api/doctors/delete-doctor/${id}`)
            await fetchAllDoctors()
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAllDoctors();
        fetchAllSpecialisations();
        fetchAllCountries();
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
                                <th scope="col">Email</th>
                                <th scope="col">Specializimi</th>
                                <th scope="col">Gjinia</th>
                                <th scope="col">Shtetesia</th>
                                <th scope="col">Roli</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                doctors.map((doctor, index) => {
                                    const currentSpec = specialisations.find((spec) => spec.specialisationId === doctor.specialisationId);
                                    const currentCountry = countries.find((country) => country.countryId === doctor.countryId);

                                    return <tr key={doctor.id}>
                                        <th scope="row">{index + 1}</th>
                                        <td>{doctor.name}</td>
                                        <td>{doctor.surename}</td>
                                        <td>{doctor.email}</td>
                                        <td>{currentSpec ? currentSpec.name : 'N/A'}</td>
                                        <td>N/A</td>
                                        <td>{currentCountry ? currentCountry.name : 'N/A'}</td>
                                        <td>Doctor</td>
                                        <td><button type="button" className="btn btn-primary" onClick={()=>navigate(`/doctors/edit/${doctor.id}`)}>Edit</button></td>
                                        <td><button type="button" className="btn btn-danger" onClick={() => deleteUser(doctor.id)}>Delete</button></td>
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

export default Doctors