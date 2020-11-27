import React from 'react';
import './styles.css';
import iconWhatsapp from '../../Assets/Images/icons/whatsapp.svg';


interface ClienteProps {
    avatar: string;
    bio: string;
    id: number;
    nome: string;
    link: string;
}
const ClienteItem: React.FC<ClienteProps> = ({ avatar, bio, id, link, nome }) => {
    return (
        <article className="cliente-item">
            <header>
                <img src={avatar} alt={nome} />
                <div>
                    <strong>{nome}</strong>
                </div>
            </header>
            <p>{bio}</p>
            <footer>
                <a href={link} target="_blank">
                    Acessar
                </a>
            </footer>
        </article>
    )
}
export default ClienteItem;