import {Injectable} from '@angular/core';
import brokers from './mock-brokers';

@Injectable()
export class BrokerService {
favoriteCounter: number = 0;
favorites: Array<any> = [];


    findAll() {
        return Promise.resolve(brokers);
    }

    findById(id) {
        return Promise.resolve(brokers[id - 1]);
    }

    favorite(property) {
    this.favoriteCounter = this.favoriteCounter + 1;
    this.favorites.push({id: this.favoriteCounter, property: property});
    return Promise.resolve();
  }
}
