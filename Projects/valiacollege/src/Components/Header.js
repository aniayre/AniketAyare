import React, { Component } from "react";
import { Link } from "react-router-dom";


class Header extends Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg bg-light navbar-white">
                    <div class="container-md">
                        <a class="navbar-brand navc" href="#">
                            <img class="w-75" src="images/valia-logo-3.png" />
                        </a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse " id="collapsibleNavbar">
                            <ul class="navbar-nav d-flex flex-wrap">
                                <li class="nav-item ps-2">
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>
                                <li class="nav-item dropdown" id="drpd">
                                    <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                                        About US
                                    </a>
                                        <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Governibg Body</a></li>
                                            <li><a class="dropdown-item" href="#">Organogram</a></li>
                                            <li><Link class="dropdown-item" to="/rti">RTI</Link></li>
                                        </ul>
                                </li>
                            {/* <li class="nav-item ps-2">
                                    <a class="nav-link" href="#">About US</a>
                                </li> */}
                            <li class="nav-item ps-2 dropdown" id="drpd">
                                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#">Programs/Admission</a>
                                <ul class="dropdown-menu">
                                            <li><a class="dropdown-item" href="#">Governibg Body</a></li>
                                            <li><a class="dropdown-item" href="#">Organogram</a></li>
                                            <li><Link class="dropdown-item" to="/rti">RTI</Link></li>
                                        </ul>
                            </li>
                            <li class="nav-item ps-2">
                                <a class="nav-link" href="#">Committes</a>
                            </li>
                            <li class="nav-item ps-2">
                                <a class="nav-link" href="#">Students Support</a>
                            </li>
                            <li class="nav-item ps-2">
                                <a class="nav-link" href="#">NAAC</a>
                            </li>
                            <li class="nav-item ps-2">
                                <a class="nav-link" href="#">Research</a>
                            </li>
                            <li class="nav-item ps-2">
                                <a class="nav-link" href="#">Alumni</a>
                            </li>
                            <li class="nav-item ps-2">
                                <Link class="nav-link" to="/contact">Contact US</Link>
                            </li>
                        </ul>
                    </div>
            </div>
                </nav >
            <div class="container-lg py-2 bhmar">
                <marquee>College will commence for all First Year students for academic year 2024-25 on 11th July 2024.</marquee>
            </div>
            </div >
        )
    }
}

export default Header;