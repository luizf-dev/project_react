import React,{useState, useEffect} from "react";
import '../scss/home.scss';
import Header from './Header';
import Footer from "./Footer";
import DinamicTitle from './DinamicTitle';


function Home(){
        return(
            <div>
                <Header/>
                <div className="home">
                    <DinamicTitle text={"Bem-vindo a Home!"}/>
                </div>
                <Footer/>
            </div>
        );
    }

export default Home;