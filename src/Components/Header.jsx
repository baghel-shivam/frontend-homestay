import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import img from '../Images/Main_icon.png'

export default function Header() {
    const { Contact_ref, About_US_ref, Landing_ref } = useSelector((state) => state.Ref);
    const style = {
        color: "#00000"
    };

    const handleNav = (ref_to) => {
        if (window.location.pathname === '/') {
            if (ref_to instanceof HTMLElement) {
                ref_to.focus();
                ref_to.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
            }
        }
    };

    const navigate = useNavigate();

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary p-0">
            <Container className='p-0'>
                <Navbar.Brand>
                    <div className='d-flex justify-content-center align-content-between align-items-center'>
                        <img src={img} height={60} width={60} /> <span className='fs-3 px-2 home-stay-title'>HomeStay</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav px-3" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto px-lg-4 mt-lg-2">
                        <Nav.Link>
                            <Link onClick={() => window.location.pathname === '/' ? handleNav(Landing_ref) : navigate('/')} className="nav-link active add-new-property mx-lg-2" style={{ ...style, borderBottom: ".5px solid" }} aria-current="page" to="/"><span className='text px-2'>Home</span><span className='mt-2'><i class="bi bi-house"></i></span></Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link onClick={() => window.location.pathname === '/' ? handleNav(Contact_ref) : navigate('/')} className="nav-link active add-new-property  mx-lg-2" style={{ ...style, borderBottom: ".5px solid" }} ><span className='text px-3'>Contact us</span> <span className='mt-2 w-100'><i class="bi bi-telephone"></i></span></Link>
                        </Nav.Link>
                        <Nav.Link >
                            <Link onClick={() => window.location.pathname === '/' ? handleNav(About_US_ref) : navigate('/')} className="nav-link active add-new-property  mx-lg-2" style={{ ...style, borderBottom: ".5px solid" }} ><span className='text px-2'>About us</span> <span className='mt-2 w-100'><i class="bi bi-exclamation-circle"></i></span></Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to='/add-homestay' className="nav-link active add-new-property" style={{ ...style, borderBottom: "1.5px solid" }} >
                                <span className="text px-2">Add your property</span><span className='w-100 mt-2'>With HomeStay</span>
                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
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