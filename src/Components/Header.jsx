import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import img from '../Images/Main_icon.png'
import free from "../Images/free.png"
import { url } from '../Redux/BaseURL';
export default function Header() {
    const navigate = useNavigate();
    const { Contact_ref, About_US_ref, Landing_ref } = useSelector((state) => state.Ref);

    const style = {
        color: "#00000",
        fontFamily: "Trebuchet MS, sans-seri"
    };

    const OnlyForDitoggleActiv = () => {
        document.getElementById('toggle-btn').click();
    };

    const handleNav = async (ref_to) => {
        if (window.innerWidth <= 768) { // Adjust the breakpoint as needed
            OnlyForDitoggleActiv();
        }
        if (window.location.pathname === '/') {
            if (ref_to instanceof HTMLElement) {
                ref_to.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else if (window.location.pathname === '/add-homestay') {
            await navigate('/');
        } else {
            navigate('/');
        }
    };

    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary p-0">
            <Container className='p-0'>
                <Navbar.Brand>
                    <div className='d-flex justify-content-center align-content-between align-items-center'>
                        <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}> <img src={img} height={60} width={60} alt='home img' /> <span className='fs-3 px-2 home-stay-title'>HomeStay</span></Link>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle id='toggle-btn' aria-controls="responsive-navbar-nav px-3" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto px-lg-4 mt-lg-2">
                        <Nav.Link>
                            <button onClick={() => handleNav(Landing_ref)} className="nav-link active add-new-property mx-lg-2" style={{ ...style, }} aria-current="page" to="/"><span className='text px-2'>Home</span><span className='mt-2'><i class="bi bi-house"></i></span></button>
                        </Nav.Link>

                        <Nav.Link>
                            <button onClick={() => handleNav(About_US_ref)} className="nav-link active add-new-property  mx-lg-2" style={{ ...style, }} ><span className='text px-2'>About us</span> <span className='mt-2 w-100'><i class="bi bi-exclamation-circle"></i></span></button>
                        </Nav.Link>
                        <Nav.Link>
                            <button onClick={() => handleNav(Contact_ref)} className="nav-link active add-new-property  mx-lg-2" style={{ ...style, }} ><span className='text px-3'>Contact us</span> <span className='mt-2 w-100'><i class="bi bi-telephone"></i></span></button>
                        </Nav.Link>
                        <Nav.Link>
                            <Link to={'/help'} onClick={() => handleNav('data')} className="nav-link active add-new-property  mx-lg-2" style={{ ...style, }} ><span className='text px-3'>Help</span> <span className='mt-2 w-100'><i class="bi bi-telephone"></i></span></Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link onClick={() => handleNav('data')} to='/add-homestay' className="nav-link active " style={{ ...style, }} >
                                <button className='btn border-dark rounded-0 position-relative'>
                                    <span className="text px-2">Add Your HomeStay</span>

                                   {/* //<img src={free} height={40} className='' style={{ position: 'absolute', right: '-10%', top: '-10%', transform: "rotate(65deg)" }} /> */}


                                </button>

                            </Link>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}

