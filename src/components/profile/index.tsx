import './style.css';

import { useEffect, useState } from 'react';
import { PropsUser } from './propsUser';

export const Profile = () => {

    const [ data, setData ] = useState<PropsUser>({
        avatar_url: '',
        bio: '',
        blog: '',
        company: '',
        created_at: '',
        email: '',
        events_url: '',
        followers: 0,
        followers_url: '',
        following: 0,
        following_url: '',
        gists_url: '',
        gravatar_id: '',
        hireable: false,
        html_url: '',
        id: 0,
        location: '',
        login: '',
        name: '',
        node_id: '',
        organizations_url: '',
        public_gists: 0,
        public_repos: 0,
        received_events_url: '',
        repos_url: '',
        site_admin: false,
        starred_url: '',
        subscriptions_url: '',
        type: '',
        updated_at: '',
        url: ''
    });

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('https://api.github.com/users/meu-bem');
            const data = await response.json();
            setData(data);
        }
        
        fetchData();
    }, []);

    return(
        <>
            <div className="card-profile">
                <img src="http://github.com/meu-bem.png" alt="Profile picture" title="Profile picture"/>
                <div className="profile-description">
                    <h1>{data.name ? data.name : '.........'}</h1>
                    <h2>DevOps at Eldorado</h2>
                </div>
            </div>
        </>
    )
}