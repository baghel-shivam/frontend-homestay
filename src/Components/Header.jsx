import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import img from '../Images/Main_icon.png'

export default function Header() {
    const navigate = useNavigate();
    const { Contact_ref, About_US_ref, Landing_ref } = useSelector((state) => state.Ref);
    const style = {
        color: "#00000"
    };
    const handleNav = async (ref_to) => {
        document.getElementById('toggle-btn').click()
        if (window.location.pathname === '/') {
            if (ref_to instanceof HTMLElement) {
                ref_to.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        } else if (window.location.pathname === '/add-homestay') {
            setTimeout(async () => {
                await navigate('/');
                if (ref_to instanceof HTMLElement) {
                    await ref_to.click();
                }
            }, 1000); // 1 second delay before clicking ref_to
        }
    };
    const navigateToAdmin = () => {
        // if (window.location.path === "privacy-policy") {
        // setTimeout(() => {
            window.location.replace = "https://webapp-backend.azurewebsites.net/admin_dashboard"

        // }, 2000);
        // }
    }



    return (
        <Navbar fixed="top" collapseOnSelect expand="lg" className="bg-body-tertiary p-0">
            <Container className='p-0'>
                <Navbar.Brand>
                    <div className='d-flex justify-content-center align-content-between align-items-center'>
                        <img src={img} height={60} width={60} alt='home img' /> <span className='fs-3 px-2 home-stay-title'>HomeStay</span>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle id='toggle-btn' aria-controls="responsive-navbar-nav px-3" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto px-lg-4 mt-lg-2">
                        <Nav.Link>
                            <Link onClick={() => handleNav(Landing_ref)} className="nav-link active add-new-property mx-lg-2" style={{ ...style, borderBottom: ".5px solid" }} aria-current="page" to="/"><span className='text px-2'>Home</span><span className='mt-2'><i class="bi bi-house"></i></span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link onClick={() => handleNav(Contact_ref)} className="nav-link active add-new-property  mx-lg-2" style={{ ...style, borderBottom: ".5px solid" }} ><span className='text px-3'>Contact us</span> <span className='mt-2 w-100'><i class="bi bi-telephone"></i></span></Link>
                        </Nav.Link>
                        <Nav.Link>
                            <Link onClick={() => handleNav(About_US_ref)} className="nav-link active add-new-property  mx-lg-2" style={{ ...style, borderBottom: ".5px solid" }} ><span className='text px-2'>About us</span> <span className='mt-2 w-100'><i class="bi bi-exclamation-circle"></i></span></Link>
                        </Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link onClick={() => handleNav('data')} to='/add-homestay' className="nav-link active add-new-property" style={{ ...style, borderBottom: "1.5px solid" }} >
                                <span className="text px-2">Add your property</span><span className='w-100 mt-2'>With HomeStay</span>
                            </Link>
                        </Nav.Link>
                        <Nav.Link>

                            <span
                            
                                target='_blank'
                                onClick={() => navigateToAdmin} className="nav-link active add-new-property" style={{ ...style, borderBottom: "1.5px solid" }} >
                                <span className="text px-2">Admin</span><span className='w-100 mt-2'>Login</span>
                            </span>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

