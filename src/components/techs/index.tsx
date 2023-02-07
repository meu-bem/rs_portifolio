import './style.css'

export const Techs = () => {
    const techItems: String[] = [
        'JAVASCRIPT', 'reactjs', 'nodejs', 'git', 'github', 'html', 'css', 'elixir', 'react native'
    ];

    return (
        <>
            <div className="card-techs">
                <h1>
                    Tecnologias
                </h1>
                <div className="tech-tags">
                    {
                        techItems.map((techName, index) => (
                            <span className="tech" key={index}>
                                { techName.toUpperCase() }
                            </span>
                        ))
                    }
                </div>
            </div>
        </>
    )
}