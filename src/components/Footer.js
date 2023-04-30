import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="pt-4 bg-dark text-white-50" >
            <div className="container">
                <div className="row">
                    {/* Column1 */}
                    <div className="col">
                        <h4>QKMF LOGO...</h4>
                        <h1 className="list-unstyled fs-6">
                            <li>Administrator   </li>
                            <li>Doktor</li>
                            <li>Pacient</li>
                        </h1>
                    </div>
                    {/* Column2 */}
                    <div className="col">
                        <h4>Rreth Nesh</h4>
                        <h1 className="list-unstyled fs-6">
                            <li>UBT-Students</li>
                            <li>Ahmet Kaçiku, Ferizaj</li>
                        </h1>
                    </div>
                    {/* Column3 */}
                    <div className="col">
                        <h4>Na Kontaktoni</h4>
                        <h1 className="list-unstyled fs-6">
                            <li>al55544@ubt-uni.net</li>
                            <li>dz52352@ubt-uni.net</li>
                        </h1>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} Arbnor Lama | Dhurim Zenuni |
                        Lab1 (programing) | Project
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;