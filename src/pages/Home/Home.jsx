import React from "react"
import CLOUDS from "vanta/src/vanta.clouds"
import "./Home.css"
import Marquee from "../../components/Marquee/Marquee";
import Marquees from "../../components/Marquee/Marquee";

export default function Home(){
    React.useEffect(()=>{
        CLOUDS({
            el:"#vanta",
        })
    },[]);
    return(
        <div className="home">
            <div id="vanta" className="bg">
            <div className="home-main">
               <h1>CHROMA</h1> 
               <h2>A one stop destination for online shopping in India.</h2>
            </div>
            </div>
        </div>
    )
}