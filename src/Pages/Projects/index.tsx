import React, { useEffect, useState } from 'react';
import { usePromiseTracker } from 'react-promise-tracker';
import axios from 'axios';
import './styles.css';

interface RepoProps {
    name: string;
    description: string;
    html_url: string;
}
const Projects = () => {
    const [repos, setRepos] = useState<RepoProps[]>([]);
    const { promiseInProgress } = usePromiseTracker();
    useEffect(() => {
        async function getData() {
            const repo = await axios.get('https://api.github.com/users/JoaoptGaino/repos');
            setRepos(repo.data);
        }
        getData();
    }, []);
    return (
        <div className="" id="project-page">
            <h1>Esses projetos estão no <a href="https://github.com/joaoptgaino" target="_blank">Github</a></h1>
            <table id="projects">
                <tr>
                    <th>Nome</th>
                    <th>Descricao</th>
                    <th>Acesse</th>
                </tr>
                {promiseInProgress === true ?
                    <tr>
                        <td>Carregando....</td>
                    </tr>
                    :
                    repos.map(repo => (
                        <tr>
                            <td>{repo.name}</td>
                            <td>{repo.description === null ? 'No description available, but take a look' : repo.description}</td>
                            <td><a href={repo.html_url} target="_blank">Ver</a></td>
                        </tr>
                    ))
                }
            </table>
        </div>
    );
}

export default Projects;