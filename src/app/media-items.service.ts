import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MediaItemsService {

  constructor() {
  }

  mediaItems = [
    {
      id: 1,
      name: 'Minions 1',
      producer: 'WB',
      description: 'here is some description about minions 1',
      watchedOn: '2022-10-30',
      isFavourite: false
    }, {
      id: 2,
      name: 'Minions 2',
      producer: 'Illumination',
      description: 'here is some description about minions 2',
      watchedOn: '2022-11-30',
      isFavourite: true
    }, {
      id: 3,
      name: 'Minions 3',
      producer: 'Illumination',
      description: 'here is some description about minions 3',
      watchedOn: '2022-11-30',
      isFavourite: false
    }, {
      id: 4,
      name: 'Minions 4',
      producer: 'Illumination',
      description: 'here is some description about minions 4',
      watchedOn: '2022-12-30',
      isFavourite: true
    }];


  get() {
    return this.mediaItems;
  }

  add(mediaItem: any) {
    this.mediaItems.push(mediaItem);
  }

  delete(mediaItem: any) {
    console.log(this.mediaItems)
    this.mediaItems = this.mediaItems.filter(item => item !== mediaItem);
    console.log(this.mediaItems)
  }
}
