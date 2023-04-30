import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './Dashboard.js';

const Contacts = () =>{
    const [contacts, setContacts] = useState([])

    const fetchAllContacts = async () => {
        try {
            const res = await axios.get('https://localhost:44333/api/contacts')
            setContacts(res.data)
        } catch (error) {
            console.log(error)
        }
    }

    const deleteContacts = async (id) => {
        try {
            const res = await axios.delete(`https://localhost:44333/api/contacts/${id}`);
            fetchAllContacts();
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchAllContacts();
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
                                <th scope="col">Email</th>
                                <th scope="col">Message</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((contact, index) => {
                                    return <tr key={contact.Id}>
                                         <th scope="row">{index+1}</th>
                                         <td>{contact.name}</td>
                                         <td>{contact.email}</td>
                                         <td>{contact.message}</td>
                                         <td><button type="button" className="btn btn-danger" onClick={() => deleteContacts(contact.id)}>Delete</button></td>
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

export default Contacts