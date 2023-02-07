import './style.css';

import { Event, PropsEvent } from '../event'

export const ListExperiences = () => {
    const events: PropsEvent[] = [
        {
            title: 'Rocketseat',
            startYear: '2019',
            endYear: 'Atualmente',
            place: 'Community Experience',
        },
        {
            title: 'Rocketseat',
            startYear: '2019',
            endYear: 'Atualmente',
            place: 'Community Experience',
        },
        {
            title: 'Rocketseat',
            startYear: '2019',
            endYear: 'Atualmente',
            place: 'Community Experience',
        },
        {
            title: 'Rocketseat',
            startYear: '2019',
            endYear: 'Atualmente',
            place: 'Community Experience',
        },
    ]

    return (
        <>
            <div className="card-list-experiences">
                <h1>
                    Experiências
                </h1>
                <div className="events">
                    {
                        events.map(({
                            title, startYear, endYear, place
                        }) => (
                            <Event
                                title={title}
                                startYear={startYear}
                                endYear={endYear}
                                place={place}
                            />
                        ))
                    }
                </div>
            </div>
        </>
    )
}