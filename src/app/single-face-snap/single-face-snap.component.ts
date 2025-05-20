import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { AsyncPipe, DatePipe, NgClass, NgIf, NgStyle, TitleCasePipe } from '@angular/common';
import { FacesnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable,tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    RouterLink,
    TitleCasePipe,
    DatePipe,
    NgIf,
    AsyncPipe,

  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss'
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  snapButtonText!: string;
  userHasSnapped!: boolean;

  constructor(private faceSnapsService: FacesnapsService,
              private route: ActivatedRoute) {}

ngOnInit(): void {
  this.prepareInterface();
  this.getFaceSnap();
}


Snap(FaceSnapId: number): void {
    if (this.userHasSnapped) {
      this.unSnap(FaceSnapId);
    } else {
      this.snap(FaceSnapId);
    }
  }

unSnap(FaceSnapId: number) {
         this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(FaceSnapId, 'unsnap').pipe(
            tap(() => {
            this.snapButtonText = 'Oh, Snap!';
            this.userHasSnapped = false;
        })
        );
}

snap(FaceSnapId: number) {
     this.faceSnap$ = this.faceSnapsService.snapFaceSnapById(FaceSnapId, 'snap').pipe(
            tap(() => {
            this.snapButtonText = 'Oops, unSnap!';
            this.userHasSnapped = true;
        })
        );
}

  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }
    private getFaceSnap() {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
  }

}
