  import './style.css';

import { Profile } from '../profile';
import { Info } from '../info';
import { Techs } from '../techs'
import { ListExperiences } from '../list-experieces';
import { ListEducation } from '../list-education';

export const SideBar = () => {
    return (
        <>
            <article>
                <Profile />
                <Info />
                <Techs />
                <ListExperiences />
                <ListEducation />
            </article>
        </>
    )
}