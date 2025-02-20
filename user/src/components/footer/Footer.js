import React,{Fragment} from "react";
import "./footer.css"
import { Image } from "react-bootstrap";
import secure from "../assets/secure.png"

const Footer=()=>{

    return(
        <div className="footer">
            <Image src={secure} alt="" style={{width:'150px',height:'80px'}}></Image>
         <p style={{marginLeft:'100px',marginTop:'10px'}}>© 2025 Expedia, Inc., an Expedia Group company. All rights reserved. Expedia and the Expedia Logo are trademarks or registered trademarks of Expedia, Inc.</p>
        </div>
    )
}


export default Footer