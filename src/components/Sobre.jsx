import React, {Component} from "react";
import '../scss/sobre.scss';
import Header from './Header';
import Footer from "./Footer";



function Sobre(){
        return(
            <div>
                <Header/>
                <div className="sobre">
                    <h1>Sobre</h1>
                </div>
                <Footer/>
            </div>
        );
    }

export default Sobre;