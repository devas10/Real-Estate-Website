import React from 'react';
import {Link} from "react-router-dom";
import AuthOptions from "../auth/AuthOptions";

export default function Header() {
    return (
        <header id="header">
            <Link to="/" className="title"><h1>DAS</h1></Link>
            <form>
            <div class="form-group has-search">
              <span class="fa fa-search form-control-feedback"></span>
              <input type="text" class="form-control" placeholder="Search"/>
             </div> 
            </form>
            <AuthOptions />
        </header>
    )
}
