import React, {Component} from "react";
import '../scss/contato.scss';
import Header from './Header';
import Footer from "./Footer";
import DinamicTitle from './DinamicTitle';


function Contato(){
    return(
        <div>
            <Header/>
            <div className="contato">
                <DinamicTitle text={"Bem-vindo a Contato!"}/>
            </div>
            <Footer/>
        </div>
    );
    }

export default Contato;