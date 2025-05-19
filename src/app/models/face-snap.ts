import { SnapType } from "./snap-type.type";

export class FaceSnap {

    location?: string;
  

    constructor(
        public id: number,
        public title: string,
        public description: string,
        public photo: string,
        public createdAt: Date,
        public snaps: number,  
    ) {

     }

     addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }
  setLocation(location: string): void {
    this.location = location;
  }

    withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }

  snap(snapType: SnapType): void {
    if (snapType === 'snap') {
      this.addSnap();
    } else if (snapType === 'unsnap') {
      this.removeSnap();
    }
  }
}