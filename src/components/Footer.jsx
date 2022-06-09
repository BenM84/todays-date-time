import React from "react";

function Footer(){

    const year = new Date().getFullYear();

    const name = ("Ben");

    return(
        <div className="footer">
            <p>&#xa9;Copyright {year}</p>
            <p>Powered by {name} Techs,Inc. &#x2122;</p>
        </div>
    );

}

export default Footer;