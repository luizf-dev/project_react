import React, {Component} from "react";
import '../scss/footer.scss';
import { Link } from "react-router-dom";


function Footer(){
    return(
        <div>
            <div className="footer">
                <ul className="footer-ul">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/sobre">Sobre</Link></li>
                    <li><Link to="/contato">Contato</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;