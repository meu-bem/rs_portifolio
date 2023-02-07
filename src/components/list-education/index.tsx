import './style.css';

import { Event, PropsEvent } from '../event'

export const ListEducation = () => {
    const events: PropsEvent[] = [
        {
            title: 'Rocketseat',
            startYear: '2019',
            endYear: '2019',
            place: 'GoStack',
        },
        {
            title: 'Rocketseat',
            startYear: '2019',
            endYear: '2020',
            place: 'Ignite',
        },
        {
            title: 'Rocketseat',
            startYear: '2019',
            endYear: '2021',
            place: 'Ignite Pro',
        },
        {
            title: 'Rocketseat',
            startYear: '2019',
            endYear: '2021',
            place: 'Ignite Pro',
        },
    ]

    return (
        <>
            <div className="card-list-experiences">
                <h1>
                    Educação
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