import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

const data: Resort[] = [
  {
    type: 'hotel',
    address: 'Sed ut perspiciatis',
    phone: 1285968685,
    img: 'assets/images/b1',
    weather: {
      temperature: 18,
      water: 20,
      title: 'Et harum quidem',
      icon: 'assets/images/cloudy.png'
    },
    social_info: {
      title: 'Nam libero voluptatem',
      followers: 2850,
      following: 675,
      img: 'assets/images/b1.jpg'
    }
  },
  {
    type: 'hotel',
    address: 'Lorem ipsum',
    phone: 9876543210,
    img: 'assets/images/r1',
    weather: {
      temperature: 25,
      water: 20,
      title: 'Cloudy',
      icon: 'assets/images/cloudy.png'
    },
    social_info: {
      title: 'Social networks',
      followers: 1846,
      following: 789,
      img: 'assets/images/r1.jpg'
    }
  }
];
export const resorts$: Observable<Resort[]> = Observable.of(data);
  //.delay(2000);
