import React from 'react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import img from '../Images/pic3.jpg'
import { useSelector } from 'react-redux'
export default function Header() {
    const { Contact_ref, About_US_ref, Landing_ref } = useSelector((state) => state.Ref)

    const navigate = useNavigate()

    const Nav = (ref_to) => {
        if (window.location.pathname === '/') {
            ref_to.focus();
            ref_to.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
        }

    }

    const style = {
        color: "#00000"
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg #2F3C7E py-2 position-fixed fixed-top px-lg-4" style={{ background: '#ffff', color: '#000000' }}>
                <div className="container-fluid">
                    <a className="navbar-brand fs-3" style={{ color: '#000000', fontFamily: 'Trebuchet MS, sans-seri', wordSpacing: '2px', letterSpacing: '3px', fontWeight: '700' }}>HomeStay</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div id='profile_image' className='rounded-circle bg-danger nav-link' role="button" aria-expanded="false">
                            <img src={img} style={{ height: '100%', width: '100%', borderRadius: '50%', }} role="button" aria-expanded="false" />

                            <ul className="dropdown-menu">
                                <li>
                            {/* <Link to='/add-homestay' className="dropdown-item"  style={style} >Add Your HomeStay</Link> */}

                                </li>
                                <li><a className="dropdown-item" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={style} >My profile</a></li>
                                <li><a className="dropdown-item" style={style} >Sign out</a></li>
                            </ul>
                        </div>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link onClick={() => window.location.pathname === '/' ? Nav(Landing_ref) : navigate('/')} className="nav-link active" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={style} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item d-md-none d-lg-none d-sm-block" >
                            <Link to='/add-homestay' className="dropdown-item"  style={style} >Add Your HomeStay</Link>

                                <Link className="nav-link active" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" aria-current="page" style={style} >Profile</Link>
                            </li>

                            <li className="nav-item" onClick={() => window.location.pathname === '/' ? Nav(Contact_ref) : navigate('/')}>
                                <Link className="nav-link active" aria-current="page" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={style} >Contact us</Link>
                            </li>
                            <li className="nav-item" onClick={() => window.location.pathname === '/' ? Nav(About_US_ref) : navigate('/')}>
                                <Link className="nav-link active" aria-current="page" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" style={style} >About us</Link>
                            </li>

                        </ul>
                        <form className="d-flex mx-4 d-none d-md-block d-lg-block">
                            <li className=" navbar-nav nav-item dropdown">
                                <Link to='/add-homestay' className="nav-link active"  style={style} >Add your property</Link>
                            </li>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )
}
{/* <div id='profile_image' className='rounded-circle bg-danger nav-link d-none d-lg-block d-md-block' role="button" data-bs-toggle="dropdown" aria-expanded="false">
<a className="nav-link" role="button" data-bs-toggle="dropdown" aria-expanded="false">
<img src={img} style={{ height: '100%', width: '100%', borderRadius: '50%', }} role="button" data-bs-toggle="dropdown" aria-expanded="false" />
</a>
<ul className="dropdown-menu">
    <li><a className="dropdown-item" >My Profile</a></li>
    <li><a className="dropdown-item" >Logout</a></li>

</ul>
</div> */}