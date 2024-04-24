import React, {Component} from "react";
import '../scss/header.scss';
import { Link } from "react-router-dom";
import { Braces } from "lucide-react";

class Header extends Component{

    render(){
        return(
            <div>
                <div className="header">
                    <nav>
                        <Link to="/">
                            <a className="logo">
                            <Braces/>
                                Logo
                            </a>
                        </Link>    
                        <ul className="header-ul">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/sobre">Sobre</Link></li>
                            <li><Link to="/contato">Contato</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        );
    };
}

export default Header;