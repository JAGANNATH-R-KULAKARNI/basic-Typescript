import faker from 'faker';
import {Mappable} from './CustomMap';

export class Company implements Mappable{
  companyName : string;
  catchPhrase : string;
  location : {
    lat : number;
    lng : number;
  };

  constructor(){
    this.companyName=faker.company.companyName();
    this.catchPhrase=faker.company.catchPhrase();

    this.location={
      lat : parseFloat(faker.address.latitude()),
      lng : parseFloat(faker.address.longitude())
    }
  }

  markerContent():string{
    return `
    <div>
    <h1>CompanyName : ${this.companyName}</h1>
    <h2>Location : Latitude -> ${this.location.lat} , Longitude -> ${this.location.lng}</h2>
    </div>`;
  }
}