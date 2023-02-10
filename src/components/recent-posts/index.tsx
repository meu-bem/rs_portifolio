import './style.css';
import { Post } from '../post';

export const RecentPosts = () => {
    return (
        <>
            <div className="posts">
                <div className="recent-posts">
                    <h1>Recent Posts</h1>
                </div>
                <div className="posts-list" >
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </div>
            </div>
        </>
    );
}