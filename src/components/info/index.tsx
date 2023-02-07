import { InfoItem } from '../info-item';

import {
    FiMapPin, FiBriefcase, FiGithub, FiLinkedin, FiTwitter, FiGlobe, FiMail
} from 'react-icons/fi';

import './style.css'

export const Info = () => {
    return (
        <>
            <div className="card-info">
                <InfoItem
                    Icon={FiMapPin}
                    title="Brasil"
                />
                <InfoItem
                    Icon={FiBriefcase}
                    title="Eldorado"
                />
                <InfoItem
                    Icon={FiGithub}
                    title="MateusSantosMeuBem"
                />
                <InfoItem
                    Icon={FiLinkedin}
                    title="mateus-santos"
                />
                <InfoItem
                    Icon={FiTwitter}
                    title="mateus-santos"
                />
                <InfoItem
                    Icon={FiGlobe}
                    title="https://httpstatusdogs.com/404-not-found"
                />
                <InfoItem
                    Icon={FiMail}
                    title="mateus@santos.com"
                />
            </div>
        </>
    )
}