import ppisakarya from '../../../assets/image/ppisakarya.jpg';
import opengreenspace from '../../../assets/image/opengreenspace.jpg';
import crypto from '../../../assets/image/crypto.jpg';

const projects = [
  {
    title: 'PPI Sakarya Data Center',
    description:
      'This is my biggest project so far and i really proud of it. I wanted to contribute for Indonesian Student Association in Sakarya so i decided to build webapp that helps for managing student data and providing helpful informations for all student.',
    img: ppisakarya,
    tags: [
      'React',
      'Chakra UI',
      'Axios',
      'Redux',
      'Formik',
      'React Table',
      'Nodejs',
      'Express',
      'Sequelize',
      'Postgresql',
      'Netlify',
      'Heroku',
    ],
    url: 'https://vigilant-jones-ef1325.netlify.app/',
  },
  {
    title: 'Istanbul Open Green Space Location',
    description:
      'This is one of my favourite project. Not something fancy but i learned how to work with another library in react. Also with real data provided by Istanbul Open Data Portal, i created simple map app that show the location of open green spaces in Istanbul',
    img: opengreenspace,
    tags: ['React', 'Mapboxgl', 'React Bootstrap'],
    url: 'https://istanbulpark.netlify.app/',
    sc: 'https://github.com/zidanomar/istanbul-park-locations',
  },
  {
    title: 'Crypto Dashboard',
    description:
      'One of my first project. When i was learing react, i watch a lot of video on youtube to figure out how react works and try to implement it by my own like i create my own design for that tutorial',
    img: crypto,
    tags: ['React', 'Coingecko API', 'React Bootstrap'],
    url: 'https://react-bootstrap-crypto-dashboard.netlify.app/',
    sc: 'https://github.com/zidanomar/crypto-dashboard',
  },
];

export { projects };
