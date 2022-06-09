import React from "react";
import Time from "./Time";
import Date from "./Date";
import Count from "./Count";
import Footer from "./Footer";



function App(){
    return(
        <div className="container">
            <header>My Date And Time</header>
            <Time/>
            <Date/>
            <Count/>
            <Footer/>
        </div>

    );
}

export default App;