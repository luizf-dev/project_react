import React, {Component} from "react";
import '../scss/contato.scss';
import Header from './Header';
import Footer from "./Footer";



function Contato(){
        return(
            <div>
                <Header/>
                <div className="contato">
                    <h1>Contato</h1>
                </div>
                <Footer/>
            </div>
        );
    }

export default Contato;