import { useState, useEffect } from "react";
import { Navbar, Container, NavDropdown } from "react-bootstrap";

export const Navbar = () => {
    const [activeLink, setActiviteLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                seScrolled(true);
            }else {
                seScrolled(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scrol", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiviteLink(value);
    }

    return (
        <Navbar expand ="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="home">
                    <img src={''} alt="logo" />
                </Navbar.Brand>
                <Nav.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggle-icon"></span>
                </Nav.Toggle>
                <Nav.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')} >Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active nav-link' : 'navbar-link'}onClick={() => onUpdateActiveLink('skills')} >Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active nav-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')} >Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="#"> <img src={''} alt="" /> </a>
                            <a href="#"> <img src={''} alt="" /> </a>
                            <a href="#"> <img src={''} alt="" /> </a>
                        </div>
                        <button className="vvd" onClick={() => concole.log ('conect')}><span>Let's Connect</span></button>
                    </span>
                </Nav.Collapse>
            </Container>
        </Navbar>
    )
}