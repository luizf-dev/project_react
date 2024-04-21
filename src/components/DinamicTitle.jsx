import React, {useState, useEffect} from "react";



function DinamicTitle({text}){

    const [fontSize, setFontSize] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setFontSize((prevSize)=>{
                if(prevSize < 7){
                    return prevSize + 0.5;
                }else{
                    return 1;
                }
            });
        }, 200);

        return () => clearInterval(interval);
    }, []);

    return <h1 className="dinamic-title" style={{fontSize: `${fontSize}rem`}}>{text}</h1>
}

export default DinamicTitle;