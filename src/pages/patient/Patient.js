import React from 'react'
import { Link } from 'react-router-dom';

const Patient = () => {
  return (

    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
    <div className='container'>
    <div className='row'>
      <div className='col'>
        <h1>Pershendetje, Pacient</h1>
        <p>Mirsevini ne Qendren Kryesore te Mjeksis Familiare.</p>
        <hr/>
        <p>Pasi te KYÇENI/REGJISTROHENI do keni qasje te ndryshme.</p>
        <button type="button" className="btn btn-primary mx-2"><Link to='/registerpatient' className='text-decoration-none text-white'>Regjistrohu</Link></button>
        <Link to='/login'><button type="button" className="btn btn-primary">Kyçu</button></Link>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Patient