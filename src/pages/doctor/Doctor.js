import React from 'react'
import { Link } from 'react-router-dom';

const Doctor = () => {
  return (
    <div  className='d-flex justify-content-center align-items-center bg-light vh-100'>
    <div className='container'>
    <div className='row'>
      <div className='col'>
        <h1>Pershendetje, Doktor</h1>
        <p>Mirsevini ne Qendren Kryesore te Mjeksis Familiare.</p>
        <hr/>
        <p>Pasi te KYÇENI do keni qasje te ndryshme.</p>
        <button type="button" className="btn btn-primary mx-2"><Link to='/register' className='text-decoration-none text-white'>Apliko</Link></button>
        <Link to='/login'><button type="button" className="btn btn-primary">Kyçu</button></Link>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Doctor