import React from 'react'
import Dashboard from './Dashboard'

const Appointment = () => {
    return (
        <div>
            <Dashboard>
                <div className='w-100 d-flex flex-column  align-items-center'>
                    <div className='d-flex  w-100 mt-4  pb-2 justify-content-center'>
                        <form className='d-flex flex-row align-items-start gap-2'>
                            <button className='btn btn-primary'>Cakto Termin</button>
                        </form>
                    </div>
                    <table className="table table-bordered border-primary w-75">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Doktorri</th>
                                <th scope="col">Pacienti</th>
                                <th scope="col">Pershkrimi</th>
                                <th scope="col">Data</th>
                                <th scope="col">Koha</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row"></th>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><button type="button" className="btn btn-primary">Edit</button></td>
                                <td><button type="button" className="btn btn-danger">Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Dashboard>
        </div>
    )
}

export default Appointment