import {HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from  './components/Home';
import Sobre from  './components/Sobre';
import Contato from  './components/Contato';


function App(){
    return(
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route path="/sobre" element={<Sobre/>}/>
                <Route path="/contato" element={<Contato/>}/>
            </Routes>
        </Router>
        
    );
}

export default App;