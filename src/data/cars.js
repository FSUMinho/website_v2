const media = (id) => (file) => `/garage/${id}/${file}`;
const fsum01 = media('fsum01');

const cars = [
    {
        id: 'fsum01',
        name: 'FSUM 01',
        year: '2026',
        logo: fsum01('logo.svg'),
        logoWhite: fsum01('logo_white.png'),
        cover: fsum01('cover.jpg'),
        hero: fsum01('herov2.jpg'),
        aboutImage: fsum01('about.jpg'),
        descriptionKey: 'about_car.description',

        // Competition ids from competitions.js
        competitions: ['fspt26'],

        // The big numbers shown just under the hero
        highlights: [
            { labelKey: 'specs.performance.acceleration', value: '4', unit: 's' },
            { labelKey: 'specs.performance.speed', value: '110', unit: 'km/h' },
            { labelKey: 'specs.powertrain.power', value: '80', unit: 'kW' },
            { labelKey: 'specs.performance.weight', value: '280', unit: 'kg' },
        ],

        specs: [
            {
                titleKey: 'specs.performance.title',
                rows: [
                    { labelKey: 'specs.performance.acceleration', value: '4', unit: 's' },
                    { labelKey: 'specs.performance.speed', value: '110', unit: 'km/h' },
                    { labelKey: 'specs.performance.weight', value: '280', unit: 'kg' },
                ],
            },
            {
                titleKey: 'specs.powertrain.title',
                rows: [
                    { labelKey: 'specs.powertrain.type-engine', value: 'EV' },
                    { labelKey: 'specs.powertrain.power', value: '80', unit: 'kW' },
                    { labelKey: 'specs.powertrain.binary', value: '150', unit: 'Nm' },
                ],
            },
            {
                titleKey: 'specs.chassis.title',
                rows: [
                    { labelKey: 'specs.chassis.type-chassis', value: 'Tubular' },
                    { labelKey: 'specs.chassis.material', valueKey: 'specs.chassis.material-steel' },
                    { labelKey: 'specs.chassis.wheelbase', value: '1800', unit: 'mm' },
                ],
            },
            {
                titleKey: 'specs.suspension-brakes.title',
                rows: [
                    { labelKey: 'specs.suspension-brakes.type-arm', value: 'Double A-arm' },
                    { labelKey: 'specs.suspension-brakes.tyres', value: 'Hoosier & 20.5×7.0−13' },
                    { labelKey: 'specs.suspension-brakes.brakes', value: 'Wilwood' },
                ],
            },
        ],

        // Any number of photos: the page previews the first few and the rest open in a modal
        gallery: [
            { src: fsum01('gallery/fsum01_26.jpeg'), alt: 'FSUM 01 at FSPT26' },
            { src: fsum01('gallery/interior.jpg'), alt: 'FSUM 01 interior' },
            { src: fsum01('gallery/tyre.jpg'), alt: 'FSUM 01 tyre' },
            { src: fsum01('gallery/seat.jpg'), alt: 'FSUM 01 seat' },
            { src: fsum01('gallery/fspt26_2.jpg'), alt: 'FSUM 01 at FSPT26' },
            { src: fsum01('gallery/fspt26_3.JPG'), alt: 'FSUM 01' },
        ],
    },
];

export const getCar = (id) => cars.find(car => car.id === id);

export default cars;
