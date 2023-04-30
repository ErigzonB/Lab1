import React from "react";
import { Link } from "react-router-dom";
import { Card } from 'react-bootstrap';
import '../Dashboard.css';
import administrator1 from '../photo/administrator1.jpg';

const Dashboard = ({ children }) => {
    return (
        <div id="main-conteiner" >
            {/* SideBar-Pjesa anash */}
            <div>
                <div className="bg-info" id='SideBar'>
                    <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom"><i
                        className="fas fa-user-secret me-2"><Card.Img variant="top" src={administrator1} /> </i>Admin</div>
                    <div className="list-group list-group-flush my-3">
                        <Link to='/doctors' className="list-group-item list-group-item-action bg-transparent fw-bold"> Doktoret</Link>
                        <Link to='/patients' className="list-group-item list-group-item-action bg-transparent fw-bold"> Pacientet</Link>
                        <Link to='/Specialisations' className="list-group-item list-group-item-action bg-transparent fw-bold"> Specializimet</Link>
                        <Link to='/appointment' className="list-group-item list-group-item-action bg-transparent fw-bold"> Terminet</Link>
                        <Link to='/countries' className="list-group-item list-group-item-action bg-transparent fw-bold">Shtetet</Link>
                        <Link to='/cities' className="list-group-item list-group-item-action bg-transparent fw-bold">Qytete</Link>
                        <Link to='/contacts' className="list-group-item list-group-item-action bg-transparent fw-bold">Kontaktet</Link>
                        <Link to='/drugs' className="list-group-item list-group-item-action bg-transparent fw-bold">Barnat</Link>
                        <Link to='/diseases' className="list-group-item list-group-item-action bg-transparent fw-bold">Semundjet</Link>
                    </div>
                </div>
            </div>
            {/* Dashboardi */}
            {children}

        </div>
    )
}
export default Dashboard