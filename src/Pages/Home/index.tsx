import React, { useState, useEffect, Fragment, FormEvent } from 'react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import eu from '../../Assets/Images/eu.jpg';
import Input from '../../Components/Input';
import Navbar from '../../Components/Navbar';
import Textarea from '../../Components/Textearea';
import api from '../../Services/api';
import './styles.css';
const Home = () => {
    const [sender, setSender] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    async function handleEmail(e: FormEvent) {
        e.preventDefault();
        if (sender === '' || subject === '' || message === '') {
            alert("Faltou campos");
            return;
        }
        api.post('/mailer', {
            sender,
            subject,
            message
        }).then(() => {
            alert("Email enviado com sucesso");
        }).catch(err => {
            alert("Incapaz de enviar o email");
            console.log(err)
        })
    }
    return (
        <div id="home-page">
            <Navbar />
            <div className="hero-image">
                <div className="hero-text">
                    <h1>JoaoptGaino</h1>
                    <img src={eu} alt="João Pedro Theodoro Gaino" />
                    <p>Full Stack Developer</p>
                    <a href="https://api.whatsapp.com/send?phone=5514998555119&text=Gostaria%20de%20te%20contratar%20para%20um%20projeto" target="_blank"><FaWhatsapp /> Entre em contato</a>
                </div>
            </div>
            <main>
                <section id="sobre">
                    <fieldset>
                        <legend>Sobre mim</legend>
                        <p>
                            Olá, me chamo João Pedro, tenho 19 anos e programo desde os 17 anos. Comecei com o Java e agora estou me especializando como full stack e mobile utilizando React e NodeJS.
                    </p>
                        <p>
                            Faço alguns sites utilizando a tríade do desenvolvimento web(HTML,CSS e Javascript) para alguns clientes. Além disso, adoro solucionar problemas por meio da técnologia e pensando de forma técnica e empreendedora.
                        </p>
                    </fieldset>
                </section>
                <section id="contato">
                    <fieldset>
                        <legend>Contato</legend>
                    Entre em contato para que eu possa te trazer uma solução
                    </fieldset>

                    <div>
                        <fieldset>
                            <legend>Redes Sociais</legend>
                            <div>
                                <a href="https://api.whatsapp.com/send?phone=5514998555119&text=Gostaria%20de%20te%20contratar%20para%20um%20projeto" target="_blank"><FaWhatsapp /> Whatsapp</a>
                                <a href="https://www.linkedin.com/in/jo%C3%A3o-pedro-theodoro-gaino-b447a6178/" target="_blank"><FaLinkedin /> Linkedin</a>
                                <a href="https://www.instagram.com/joaoptgaino/" target="_blank"><FaInstagram /> Instagram</a>
                            </div>
                        </fieldset>

                        <form onSubmit={handleEmail}>
                            <fieldset>
                                <legend>Envie um email</legend>
                                <Input label="Email" name="email" onChange={(e) => { setSender(e.target.value) }} />
                                <Input label="Assunto" name="assunto" onChange={(e) => { setSubject(e.target.value) }} />
                                <Textarea label="Mensagem" name="mensagem" onChange={(e) => { setMessage(e.target.value) }} />
                            </fieldset>
                            <footer>
                                <button type="submit">Enviar</button>
                            </footer>
                        </form>
                    </div>
                </section>
            </main>
            <div className="footer">
                <p>Desenvolvido por &copy; João Pedro Theodoro Gaino</p>
            </div>
        </div>

    );
}

export default Home;