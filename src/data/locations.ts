import { Location } from '../types';

export const locations: Location[] = [
  {
    name: 'Eloff-Delmas',
    address: 'Eloff-Delmas Road, Mpumalanga',
    contacts: '068 616 1100',
    isUpcoming: false,
    coordinates: { lat: -26.0757, lng: 28.9506 }
  },
  {
    name: 'Bella-Bella',
    address: 'Bella-Bella Main Road, Limpopo',
    contacts: '082 335 6245',
    isUpcoming: false,
    coordinates: { lat: -24.8859, lng: 28.2871 }
  },
  {
    name: 'Modi-Molle',
    address: 'Modi-Molle Central, Limpopo',
    contacts: '082 335 6245',
    isUpcoming: false,
    coordinates: { lat: -24.7007, lng: 28.4163 }
  },
  {
    name: 'Kliprevier Alberton',
    address: 'Kliprevier Road, Next to Mall of the South, Gauteng',
    contacts: '068 616 1100',
    isUpcoming: true,
    coordinates: { lat: -26.2708, lng: 28.1224 }
  },
  {
    name: 'Mookgophong',
    address: 'Mookgophong Central, Limpopo',
    contacts: '082 335 6245',
    isUpcoming: true,
    coordinates: { lat: -24.5308, lng: 28.7316 }
  },
  {
    name: 'Brakpan',
    address: 'Brakpan Central, Gauteng',
    contacts: '068 616 1100',
    isUpcoming: true,
    coordinates: { lat: -26.2359, lng: 28.3697 }
  }
];
