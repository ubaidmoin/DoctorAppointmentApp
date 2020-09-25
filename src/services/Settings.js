// import moment from 'moment';
export const googleMapsKey = 'AIzaSyCLQcrBEdrKgoyeip5eiPimv0ukHuOkOXk';

export const region = {
  latitude: 37.7650475,
  longitude: -122.390726,
  latitudeDelta: 0.05,
  longitudeDelta: 0.05,
};

export const services = ['Surgeons', 'Service 1', 'Service 2'];

export const availability = [
  {
    id: 1,
    day: 'Today',
    available: false,
    from: '9 :30 AM',
    to: '11 :30 AM',
  },
  {
    id: 2,
    day: 'Tomorrow',
    available: true,
    from: '9 :30 AM',
    to: '11 :30 AM',
  },
  {
    id: 3,
    day: 'Monday 20/11',
    available: true,
    from: '9 :30 AM',
    to: '11 :30 AM',
  },
  {
    id: 4,
    day: 'Tuesday 21/11',
    available: true,
    from: '9 :30 AM',
    to: '11 :30 AM',
  },
  {
    id: 5,
    day: 'Wednesday 22/11',
    available: false,
    from: '9 :30 AM',
    to: '11 :30 AM',
  },
];
// export const compareTwoDates = (startDate, endDate) => {
//   var date1 = moment(startDate).format('YYYY-MM-DD HH:mm');
//   var date2 = moment(endDate).format('YYYY-MM-DD HH:mm');

//   // and i checked with if statement
//   if (date1 > date2) {
//     return 'gt';
//   } else if (date1 === date2) {
//     return 'eq';
//   } else {
//     return 'lt';
//   }
// };
