
import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import hospital1 from './photo/hospital1.jpg';
import doctoricon1 from './photo/doctoricon1.jpg';
import patienticon1 from './photo/patienticon1.png';
import administrator1 from './photo/administrator1.jpg';
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className='overflow-hidden'>
      <div className='position-relative'>
        <div className='bg-dark opacity-25 position-absolute w-100 h-100 start-0 top-0'></div>
        <img style={{height: "35rem", objectFit: 'cover'}} src={hospital1} alt='HOSPITAL PHOTO...' className='w-100' />
        <div className='container'>
          <div className='row'>
            <div className='col-md position-absolute top-50 start-50 translate-middle'>
              <p className='fs-5'><b>Emergjenc?</b></p>
             <Link to='/login'><button type='button' className='btn btn-primary btn-lg'>Cakto Termin</button></Link>
            </div>
          </div>
        </div>
      </div>
      <div className='row py-5 my-5 card-position d-flex justify-content-evenly'>
          <Card style={{width: "18rem"}} className='col-md-4 shadow p-3 my-3 bg-body rounded'>
            <Card.Img variant="top" src={administrator1} />
            <Card.Body className='d-flex flex-column justify-content-between align-items-center'>
              <Card.Title>Administrator</Card.Title>
              <Card.Text>
                Regjistrohu apo Kyqu si Administrator.
              </Card.Text>
            </Card.Body>
              <Link to="/admin" className='text-decoration-none text-white'> <button className=" btn btn-primary " type="submit">Kyçu</button></Link>
          </Card>
          <Card  style={{width: "18rem"}}  className='col-md-4 shadow p-3 my-3 bg-body rounded'>
            <Card.Img variant="top" src={doctoricon1} />
            <Card.Body className='d-flex flex-column justify-content-between align-items-center'>
              <Card.Title>Doktor</Card.Title>
              <Card.Text>
                Regjistrohu apo kyqu si Doktor.
              </Card.Text>
            </Card.Body>
              <Link to="/doctor" className='text-decoration-none text-white'> <button className="btn btn-primary " type="submit">Kyçu</button></Link>
          </Card>
          <Card style={{width: "18rem"}} className='col-md-4 shadow p-3 my-3 bg-body rounded'>
            <Card.Img variant="top" src={patienticon1} />
            <Card.Body className='d-flex flex-column justify-content-between align-items-center'>
              <Card.Title>Pacient</Card.Title>
              <Card.Text>
                Regjistrohu apo kyqu si Pacient.
              </Card.Text>
            </Card.Body>
              <Link to="/patient" className='text-decoration-none text-white'> <button className=" btn btn-primary " type="submit">Kyçu</button></Link>
          </Card>
      </div>
    </div>
  )
}

export default Home
