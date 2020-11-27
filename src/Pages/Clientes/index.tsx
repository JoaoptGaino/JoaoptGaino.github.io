import React, { Fragment, useEffect, useState } from 'react';
import { FaBook, FaGithub, FaLinkedin, FaMoon, FaSun, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '../../theme';
import './styles.css';
import GlobalTheme from '../../global';
import ClienteItem from '../../Components/ClienteItem';
import Gaino from '../../Assets/Images/logoheader.fw.png';
import Navbar from '../../Components/Navbar';
import Input from '../../Components/Input';

const Clientes = () => {

    return (

        <div id="cliente-page">
            <Navbar />
            <main>
                <fieldset>
                    <legend>Clientes</legend>
                    <ClienteItem avatar={Gaino} bio="Pizzaria de Chavantes" id={1} link="http://pizzariagaino.com.br" nome="Pizzaria do Gaino" />
                </fieldset>
            </main>
        </div>
    );
}
export default Clientes;