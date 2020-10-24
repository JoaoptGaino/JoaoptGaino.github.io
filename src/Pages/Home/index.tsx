import React, { useState, useEffect, Fragment } from 'react';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from '../../theme';
import GlobalTheme from '../../global';
import styled from 'styled-components';
import { FaArrowLeft, FaArrowRight, FaBook, FaGithub, FaInstagram, FaLinkedin, FaMoon, FaSun, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import eu from '../../Assets/Images/eu.jpg';
import './styles.css';
const Home = () => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        if (theme === "light") {
            window.localStorage.setItem("theme", "dark");
            setTheme("dark");
        } else {
            window.localStorage.setItem("theme", "light");
            setTheme("light");
        }
    };
    useEffect(() => {
        const localTheme = window.localStorage.getItem("theme");
        localTheme && setTheme(localTheme);
    }, []);
    //asideClass === 'asideInvisible' ? setAsideClass('asideVisible') : setAsideClass('asideInvisible') }
    return (
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <Fragment>
                <GlobalTheme />
                <Container>
                    <div id="home-page">
                        <header id="main-header">
                            <div className='navVisible'>
                                <div id="nav-items">
                                    <Link id="nav-item" to="/clientes"><FaBook /> Clientes</Link>
                                    <a id="nav-item" href="#"><FaLinkedin /> Linkedin</a>
                                    <Link id="nav-item" to="/projects"><FaGithub /> Github</Link>
                                    <a id="nav-item" href="https://api.whatsapp.com/send?phone=5514998555119&text=Gostaria%20de%20te%20contratar%20para%20um%20projeto"><FaWhatsapp /> Whatsapp</a>
                                    <a id="nav-item" onClick={toggleTheme}>{theme === "dark" ? <FaSun /> : <FaMoon />}</a>
                                </div>
                            </div>
                        </header>

                        <div id="corpo">
                            <main id="main-content">
                                <img src={eu} alt="" />
                                <h1>Joaoptgaino</h1>
                                <p>Full Stack Developer</p>
                                <Link to="/projects">Veja meus projetos</Link>
                            </main>
                            <footer>
                                <p className="footer">Written and directed by &copy; João Pedro Theodoro Gaino</p>
                            </footer>
                        </div>
                    </div>
                </Container>
            </Fragment>
        </ThemeProvider>
    );
}

const Container = styled.div` 
    display:flex;
    justify-content:space-between;
    align-items:center;
`;

export default Home;