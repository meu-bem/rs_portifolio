import './style.css';

import React from 'react';

export const Profile = () => {
    return(
        <>
            <div className="card-profile">
                <img src="http://github.com/MateusSantosMeuBem.png" alt="Profile picture" title="Profile picture"/>
                <div className="profile-description">
                    <h1>Mateus Santos</h1>
                    <h2>DevOps at Eldorado</h2>
                </div>
            </div>
        </>
    )
}