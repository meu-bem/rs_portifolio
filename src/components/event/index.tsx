import './style.css';

export interface PropsEvent {
    title: string;
    startYear: string;
    endYear: string;
    place: string;
}

export const Event: React.FC<PropsEvent> = ({
    title, startYear, endYear, place
}) => {
    return (
        <>
            <div className="event">
                <p>° { title }</p>
                <p>{ startYear } - { endYear }</p>
                <p>{ place }</p>
            </div>
        </>
    )
}