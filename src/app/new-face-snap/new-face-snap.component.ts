import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgIf, UpperCasePipe,AsyncPipe } from '@angular/common';
import { FacesnapsService } from '../services/face-snaps.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-new-face-snap',
  imports: [ReactiveFormsModule, UpperCasePipe, DatePipe, NgIf, AsyncPipe],
  templateUrl: './new-face-snap.component.html',
  styleUrl: './new-face-snap.component.scss'
})
export class NewFaceSnapComponent implements OnInit {

  snapForm!: FormGroup;
  faceSnapPreview$!: Observable<FaceSnap>;
  urlRegex!: RegExp;

constructor(private formBuilder: FormBuilder,
            private faceSnapsService: FacesnapsService,
            private router: Router) { }

ngOnInit(): void {
    this.urlRegex = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.snapForm = this.formBuilder.group({
        title: [null, Validators.required],
        description: [null,Validators.required],
        photo: [null, [Validators.required, Validators.pattern(this.urlRegex)]],
        location: [null]
    }, {
    updateOn: 'blur'
});

this.faceSnapPreview$ = this.snapForm.valueChanges.pipe(
    map(formValue => ({
        ...formValue,
        createdAt: new Date(),
        snaps: 0,
        id: 0
    }))
);


}

onSubmitForm() {
    this.faceSnapsService.addFaceSnap(this.snapForm.value);
    this.router.navigateByUrl('/facesnaps');
}

}

