
import React,{Fragment} from "react";
import Header from "./header";

import { Link } from "react-router-dom";
import "./searchform.css"
import { Button } from "react-bootstrap";

const Home=()=>{
    return(
        <Fragment>
            <Header></Header>
            <div className="search-form-div">
               <div className="select-option">
               <Link to="/stays" style={{marginRight:"30px",marginLeft:"550px"}}>Stays</Link>
               <Link to="/flight">Flight</Link>
               <hr style={{ border: "2px solid rgb(255, 255, 255)", margin: "10px 0" }} />
                <div className="form-div">
                   <input type="text" placeholder="Where to?"></input>
                   <input type="date" placeholder="Dates?"></input>
                   <input type="number" placeholder="Travellers" min={1}></input>
                   <Button>Search</Button>
                </div>
                </div>
            </div>
        </Fragment>
    )
}
export default Home