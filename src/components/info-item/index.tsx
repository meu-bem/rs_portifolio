import React from "react";
import { IconType } from "react-icons";

import './style.css';

interface Props {
    Icon: IconType;
    title: string;
}

export const InfoItem: React.FC<Props> = ({
    Icon, title
}) => {
    return (
        <>
            <div>
                <Icon/>
                <p>{ title }</p>
            </div>
        </>
    )
}