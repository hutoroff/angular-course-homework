import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

const data: Resort[] = [
  {
    name: 'Rooms Hotel Kazbegi',
    type: 'hotel',
    address: 'V. Gorgasali Street 1, Stepantsminda , Georgia',
    phone: 1285968685,
    img: './assets/images/photos/kazbegi1.jpg',
    thumbImg: './assets/images/photos/kazbegi2.jpg',
    weather: {
      temperature: 10,
      water: 7,
      title: 'Windy',
      icon: './assets/images/cloudy.png'
    },
    social_info: {
      title: 'Gamarjobat!',
      followers: 2850,
      following: 675,
      img: './assets/images/photos/kazbegi3.jpg'
    }
  },
  {
    name: 'Hotel Müller',
    type: 'hotel',
    address: 'Fliegenstrasse 4, Munich, Germany',
    phone: 9876543210,
    img: './assets/images/photos/muller1.jpg',
    thumbImg: './assets/images/photos/muller2.jpg',
    weather: {
      temperature: 13,
      water: 8,
      title: 'Cloudy',
      icon: './assets/images/cloudy.png'
    },
    social_info: {
      title: 'Prost!',
      followers: 1846,
      following: 789,
      img: './assets/images/photos/muller3.jpg'
    }
  },
  {
    name: 'Riders Lodge',
    type: 'hostel',
    address: 'Medoveya st. 6, Esto-Sadok, Russia',
    phone: 4325671265,
    img: './assets/images/photos/riders1.jpg',
    thumbImg: './assets/images/photos/riders2.jpg',
    weather: {
      temperature: 8,
      water: 5,
      title: 'Cloudy',
      icon: './assets/images/cloudy.png'
    },
    social_info: {
      title: 'Follow us',
      followers: 3200,
      following: 42,
      img: './assets/images/photos/riders3.jpg'
    }
  },
  {
    name: 'Phu Hai Resort',
    type: 'hotel',
    address: '8 Km, Nguyen Dinh Chieu Street, Muine, Vietnam',
    phone: 8979841214,
    img: './assets/images/photos/phuhai1.jpg',
    thumbImg: './assets/images/photos/phuhai2.jpg',
    weather: {
      temperature: 28,
      water: 23,
      title: 'Rain',
      icon: './assets/images/cloudy.png'
    },
    social_info: {
      title: 'It\'s always sunny im Muine',
      followers: 935,
      following: 367,
      img: './assets/images/photos/phuhai3.jpg'
    }
  }
];
export const resorts$: Observable<Resort[]> = Observable.of(data).delay(500);
