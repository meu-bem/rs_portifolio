import './style.css'

import { GitHubProject } from '../github-project';

export const Projects = () => {
    return (
        <>
            <div className="projects">
                <div className="my-projects">
                    <h1>My Projects</h1>
                    <a href="#">Veja todos</a>
                </div>
                <div className="github-projects" >
                    <GitHubProject />
                    <GitHubProject />
                </div>
            </div>
        </>
    )
}