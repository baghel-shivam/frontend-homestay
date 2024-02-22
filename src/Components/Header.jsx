import React from 'react'
import { Link } from 'react-router-dom'
import img from '../Images/pic3.jpg'

export default function Header() {
    const style = {
        color: "#00000"
        
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg #2F3C7E py-2 position-fixed fixed-top px-lg-4" style={{ background: '#ffff', color: '#000000' }}>
                <div className="container-fluid">
                    <a className="navbar-brand fs-3" style={{ color:'#01C380', fontFamily: 'Trebuchet MS, sans-seri', wordSpacing: '2px', letterSpacing: '3px', fontWeight: '700' }} href="#">HomeStay</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div id='profile_image' className='rounded-circle bg-danger nav-link' role="button" aria-expanded="false">
                            <img src={img} style={{ height: '100%', width: '100%', borderRadius: '50%', }} role="button" aria-expanded="false" />

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" href="#" style={style} >My profile</a></li>
                                <li><a className="dropdown-item" href="#" style={style} >Sign out</a></li>
                            </ul>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" style={style} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" style={style} aria-current="page" to="#">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/login" style={style} >Login / Sign-up</Link>
                            </li>
                            <li className="nav-item d-md-none d-lg-none d-sm-block" >
                                <Link className="nav-link active" aria-current="page" to="/login" style={style} >Profile</Link>
                            </li>
                            <li className="nav-item d-md-none d-lg-none d-sm-block">
                                <Link className="nav-link active" aria-current="page" to="/login" style={style} >Sign-out</Link>
                            </li>
                            <li className="nav-item d-md-none d-lg-none d-sm-block">
                                <Link className="nav-link active" aria-current="page" to="/login" style={style} >Something else here</Link>
                            </li>
                        </ul>
                        <form className="d-flex mx-4 d-none d-md-block d-lg-block">
                            <li className=" navbar-nav nav-item dropdown">
                                <span className='mt-2 mx-3 fs-5' style={{ ...style, fontFamily: 'Trebuchet MS, sans-seri', letterSpacing: '2px' }} >Name</span>
                                <div id='profile_image' className='rounded-circle bg-danger nav-link d-none d-lg-block d-md-block' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    {/* <a className="nav-link" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"> */}
                                    <img src={img} style={{ height: '100%', width: '100%', borderRadius: '50%', }} role="button" data-bs-toggle="dropdown" aria-expanded="false" />
                                    {/* </a> */}
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#" >My Profile</a></li>
                                        <li><a className="dropdown-item" href="#" >Logout</a></li>
                                       
                                    </ul>
                                </div>

                            </li>
                            {/* </form> */}
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
