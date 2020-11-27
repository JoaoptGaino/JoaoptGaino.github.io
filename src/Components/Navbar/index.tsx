import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaGithub, FaUser } from 'react-icons/fa';
import './styles.css';
import { FiBook } from 'react-icons/fi';

export default function Navbar() {
    const [className, setClassName] = useState('topnav');
    return (
        <div className={className} id="topnav">
            <div id="tudo">
                <Link to="/" className="active">Home</Link>
                <Link to="/clientes">Clientes</Link>
                {/* <Link to='/contact'>Contato</Link> */}
                <a href="https://github.com/joaoptgaino" target="_blank"><FaGithub /> Github</a>
            </div>
            <Link to='/projects'><FiBook /> Projetos</Link>
            <a type="button" className="icon" onClick={() => className === 'topnav' ? setClassName(`${className} responsive`) : setClassName('topnav')}>
                <FaBars />
            </a>
        </div>
    )
}