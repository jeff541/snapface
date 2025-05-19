import { Component, NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';



@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderComponent,
    FormsModule,
  
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent   {


}
