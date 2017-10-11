import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'resortSort'
})
export class ResortSortPipe implements PipeTransform {

  transform(resorts: Resort[], sortBy: string): Resort[] {
    switch (sortBy) {
      case 'Name':
        return sortByName(resorts);
      case 'Address':
        return sortByAddress(resorts);
      case 'Weather':
        return sortByTemperature(resorts);
      case 'Social':
        return sortByFollowers(resorts);
    }
    return resorts;
  }
}

function sortByName(resorts: Resort[]): Resort[] {
    resorts.sort((el1:Resort, el2:Resort) => el1.name.localeCompare(el2.name));
    return resorts;
}

function sortByAddress(resorts: Resort[]): Resort[] {
  resorts.sort((el1:Resort, el2:Resort) => el1.address.localeCompare(el2.address));
  return resorts;
}

function sortByTemperature(resorts: Resort[]): Resort[] {
  resorts.sort((el1:Resort, el2:Resort) => el2.weather.temperature - el1.weather.temperature);
  return resorts;
}

function sortByFollowers(resorts: Resort[]): Resort[] {
  resorts.sort((el1:Resort, el2:Resort) => el2.social_info.followers - el1.social_info.followers);
  return resorts;
}
