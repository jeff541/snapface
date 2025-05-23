import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { httpInterceptorProviders } from './interceptors';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
     httpInterceptorProviders,
      { provide: LOCALE_ID, useValue: 'fr-FR' },
  ]
})
export class CoreModule { }
