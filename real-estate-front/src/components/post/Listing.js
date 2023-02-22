import React,{useState} from 'react';
import {useHistory} from "react-router-dom";
import Axios from "axios";

function Listing() {

    const[pname,setPname] = useState();
    const[paddress,setPaddress] = useState();
    const[pzip,setZip] = useState();
    const[pcost,setCost] = useState();
    const[pspace,setSpace] = useState();
    const[pdescription,setDescription] = useState();
    const[ptype, setType] = useState();
    const[pavailability, setAvailability] = useState();
    const pid = localStorage.getItem('auth-token') ;
   

    const history = useHistory();

    const submit = async(e) => {

        e.preventDefault(); 

        const newPost = { pid, pname, paddress, pzip, pcost, pspace, pdescription, ptype, pavailability};
        await Axios.post("http://localhost:5000/post/postListing",newPost);

        history.push("./");
    }
    return (
        <div>
            <h2>Post your Property Listing</h2>
            <form className="form" onSubmit={submit}>
                <label htmlFor="property-name">Property Name</label>
                <input id="property-name" type="text" onChange={(e) => setPname(e.target.value) } />

                <label htmlFor="property-address">Address</label>
                <input id="property-address" type="text" onChange={(e) => setPaddress(e.target.value) } />
                
                <label htmlFor="property-zip">Pincode</label>
                <input id="property-zip" type="number" minLength="6" maxLength="6" onChange={(e) => setZip(e.target.value) } />

                <label htmlFor="property-cost">Property Cost</label>
                <input id="property-cost" type="number" onChange={(e) => setCost(e.target.value) } />

                <label htmlFor="property-space">Property Space</label>
                <input id="property-space" type="number" onChange={(e) => setSpace(e.target.value) } />

                <label htmlFor="property-description">Property Description</label>
                <input id="property-description" type="text-area" onChange={(e) => setDescription(e.target.value) } />

                <label htmlFor="property-availability">Availability</label>
                <input id="property-availability" type="text" onChange={(e) => setAvailability(e.target.value) } />

                <label htmlFor="property-type">Type</label>
                <input id="property-type" type="text" onChange={(e) => setType(e.target.value) } />

                <input type="submit" value="Post" />
            </form>
        </div>
    
    )
}

export default Listing;
