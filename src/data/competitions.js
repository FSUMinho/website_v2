// Every competition the team has entered, oldest first. Used by the Competitions page,
// and by each car page through the car's `competitions` list of ids (see cars.js).

const FSPT = {
    name: 'Formula Student Portugal',
    logo: '/archive_assets/FSPT_Logo_White_Square.svg',
    country: 'Portugal',
    city: 'Castelo Branco',
    circuit: 'Kartódromo de Castelo Branco',
};

const competitions = [
    {
        id: 'fspt23',
        ...FSPT,
        background: '/fspt_group_photo.jpg',
        year: '2023',
        class_: 'Concept Class',
        overall: '2',
        results: {
            'Business Plan Presentation': '1',
            'Engineering Design': '2',
            'Cost of Manufacturing': '5',
        },
    },
    {
        id: 'fspt24',
        ...FSPT,
        background: '/archive_assets/fspt24.jpg',
        year: '2024',
        class_: 'EV',
        overall: '7',
        results: {
            'Business Plan Presentation': '6',
            'Engineering Design': '9',
            'Cost of Manufacturing': '2',
        },
    },
    {
        id: 'fspt25',
        ...FSPT,
        background: '/archive_assets/fspt_25.jpg',
        year: '2025',
        class_: '2',
        overall: '3',
        results: {
            'Business Plan Presentation': '3',
            'Engineering Design': '5',
            'Cost of Manufacturing': '1',
        },
    },
    {
        id: 'fspt26',
        ...FSPT,
        background: '/archive_assets/fspt_26.jpg',
        year: '2026',
        class_: '1',
        overall: '6',
        results: {
            'Business Plan Presentation': '5',
            'Engineering Design': '8',
            'Cost of Manufacturing': '4',
        },
    },
];

export const getCompetitions = (ids) =>
    competitions.filter(competition => ids.includes(competition.id));

export default competitions;
