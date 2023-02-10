import { Projects } from '../projects';
import { RecentPosts } from '../recent-posts'

import './style.css';

export const Feed = () => {
    return (
        <>
            <main>
                <Projects/>
                <RecentPosts/>
            </main>
        </>
    )
}