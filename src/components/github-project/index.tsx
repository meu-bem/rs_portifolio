import  './style.css'
import {
    FiFolder, FiStar, FiGitBranch
} from 'react-icons/fi';

export const GitHubProject = () => {
    return (
        <>
            <div className="github-project">
                <div className="title">
                    <FiFolder />
                    <h1>title</h1>
                </div>
                <p className="description">
                Consulte os códigos de erro que aparecem no painel do veículo Onix.
                </p>
                <div className="project-bottom">
                    <div className="interactions">
                        <div className="it-item">
                            <FiStar />
                            60
                        </div>
                        <div className="it-item">
                            <FiGitBranch />
                            60
                        </div>
                    </div>
                    <div className="techs">
                        <span className="yellow-ball"></span>
                        JavaScript
                    </div>
                </div>
            </div>
        </>
    )
}