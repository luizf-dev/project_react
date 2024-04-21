import React, {Component} from "react";
import '../scss/sobre.scss';
import Header from './Header';
import Footer from "./Footer";
import DinamicTitle from './DinamicTitle';


function Sobre(){
    return(
        <div>
            <Header/>
            <div className="sobre">
                <DinamicTitle text={"Bem-vindo a Sobre!"}/>
            </div>
            <Footer/>
        </div>
    );
    }

export default Sobre;