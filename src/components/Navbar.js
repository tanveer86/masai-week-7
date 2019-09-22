import React from 'react';
import styles from './mystyle.modules.css'

function Navbar(){

    return(
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-primary sticky-top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <img class="img-fluid" src="https://img1a.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_4ee2f9.png" width="100" height="20"></img>

            <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">

                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-warning my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
            </nav>
        </div>
    )
}

export default Navbar