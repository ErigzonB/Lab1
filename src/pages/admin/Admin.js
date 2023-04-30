import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div  className='d-flex justify-content-center align-items-center bg-light vh-100'>
    <div className='container'>
    <div className='row'>
      <div className='col'>
        <h1>Pershendetje, Administrator</h1>
        <p>Mirsevini ne Qendren Kryesore te Mjeksis Familiare.</p>
        <hr/>
        <p>Pasi te KYÇENI do keni qasje te ndryshme.</p>
        <Link to="/login"><button type="button" className="btn btn-primary">Kyçu</button></Link>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Admin