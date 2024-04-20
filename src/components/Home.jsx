import React from "react";
import '../scss/home.scss';
import Header from './Header';
import Footer from "./Footer";


function Home(){
        return(
            <div>
                <Header/>
                <div className="home">
                    <h1>Home</h1>
                </div>
                <Footer/>
            </div>
        );
    }

export default Home;