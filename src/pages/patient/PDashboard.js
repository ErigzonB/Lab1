import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import '../Dashboard.css';
import patienticon1 from '../photo/patienticon1.png';

const PDashboard = ({children}) => {
    return (
        <div id="main-conteiner" >
            {/* SideBar-Pjesa anash */}
            <div>
                <div className="bg-info" id='SideBar'>
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                        className="fas fa-user-secret me-2"><Card.Img variant="top" src={patienticon1} /> </i>Pacient</div>  
                    <div className="list-group list-group-flush my-3">
                       <Link to='/patient' className="list-group-item list-group-item-action bg-transparent fw-bold"> Pacientet</Link>
                       <Link to='/terminet' className="list-group-item list-group-item-action bg-transparent fw-bold">Terminet</Link>
                       <Link to='' className="list-group-item list-group-item-action bg-transparent fw-bold">Pagesat</Link>
                    </div>
                </div>
            </div>
            {/* Dashboardi */}
            {children}
            
        </div>
    )
}
export default PDashboard