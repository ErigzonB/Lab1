import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import '../Dashboard.css';
import doctoricon1 from '../photo/doctoricon1.jpg';

const DrDashboard = ({children}) => {
    return (
        <div id="main-conteiner" >
            {/* SideBar-Pjesa anash */}
            <div>
                <div className="bg-info" id='SideBar'>
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                        className="fas fa-user-secret me-2"><Card.Img variant="top" src={doctoricon1} /> </i>DoktorControl</div>  
                    <div className="list-group list-group-flush my-3">
                       <Link to='/doctors' className="list-group-item list-group-item-action bg-transparent fw-bold"> Doktoret</Link>
                       <Link to='/patient' className="list-group-item list-group-item-action bg-transparent fw-bold"> Pacientet</Link>
                       <Link to='/Specialisations' className="list-group-item list-group-item-action bg-transparent fw-bold"> Specializimet</Link>
                        <a className="list-group-item list-group-item-action bg-transparent fw-bold">Terminet</a>
                    </div>
                </div>
            </div>
            {/* Dashboardi */}
            {children}
            
        </div>
    )
}
export default DrDashboard