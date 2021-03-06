//Instructions to every other class
// on how they can be an argument to 'addMarker'
// Everything in the interface must be implemented by the object
// if the object is specified as an annotation
export interface Mappable{
location : {
  lat : number;
  lng :number;
};
markerContent():string;
};

export class CustomMap{
  private googleMap : google.maps.Map;

  constructor(divId : string){
    this.googleMap=new google.maps.Map(document.getElementById(divId),{
      zoom : 1,
      center : {
        lat : 0,
        lng : 0
      }
    });
  }
  addMarker(mappable : Mappable):void{
    const marker=new google.maps.Marker({
      map : this.googleMap,
      position : {
        lat :mappable.location.lat,
        lng : mappable.location.lng
      }
    });
 
    marker.addListener('click',()=>{
      const infoWindow=new google.maps.InfoWindow({
        content : mappable.markerContent()
      });

      infoWindow.open(this.googleMap,marker);
    })
}
  // addUserMarker(user : User):void{
  //     new google.maps.Marker({
  //       map : this.googleMap,
  //       position : {
  //         lat :user.location.lat,
  //         lng : user.location.lng
  //       }
  //     })
  // }

  // addCompanyMarker(company : Company):void{
  //   new google.maps.Marker({
  //     map : this.googleMap,
  //     position : {
  //       lat :company.location.lat,
  //       lng : company.location.lng
  //     }
  //   })
  // }

}