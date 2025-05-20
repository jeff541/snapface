import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from '../face-snap/face-snap.component';
import { FaceSnap } from '../models/face-snap';
import { FacesnapsService } from '../services/face-snaps.service';
import {Observable} from 'rxjs';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-face-snap-list',
  imports: [
    FaceSnapComponent,
    NgFor,
    AsyncPipe
  ],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps!: FaceSnap[];
  faceSnaps$!: Observable<FaceSnap[]>

  constructor(private faceSnapService: FacesnapsService) {}
 
  ngOnInit(): void {    
   //this.faceSnaps = this.faceSnapService.getFaceSnaps()
   this.faceSnaps$ = this.faceSnapService.getFaceSnaps()

  }
}
