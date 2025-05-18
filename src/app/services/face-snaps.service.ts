import { Injectable } from "@angular/core";
import { FaceSnap } from "../models/face-snap";
import { SnapType } from "../models/snap-type.type";

@Injectable({

    providedIn: 'root'

})
export class FacesnapsService {
    
     private FaceSnaps:  FaceSnap[] = [
new FaceSnap(
      'Archibald',
      'Mon meilleur ami depuis tout petit !',
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      new Date(),
      47
    ),

    new FaceSnap(
      'Berry',
      "L'amour de ma vie",
      'https://media.licdn.com/dms/image/v2/D4E03AQHJnMUwRL4BrQ/profile-displayphoto-shrink_800_800/B4EZVV0MqgHgAc-/0/1740901503752?e=1752710400&v=beta&t=skVNPmg-Mmn41UMyGWvfTD-KgM8rbZMQa2e_QMAdqg8',
      new Date(),
      180
    ).withLocation('Bonabérie'),

      
      new FaceSnap(
        'Three Rock Mountain',
        'Un endroit magnifique pour les randonnées.',
        'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
        new Date(),
        6
      ),
      new FaceSnap(
        'Un bon repas',
        'Mmmh que c\'est bon !',
        'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
        new Date(),
        156
      )

    ];

   getFaceSnaps(): FaceSnap[]{

    return [...this.FaceSnaps];

   }     
  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.FaceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }
}