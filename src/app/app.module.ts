import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BasicFormComponent} from './basic-form.component';
// import { NestedFormComponent} from './nested-form.component';
// import { ArrayFormComponent} from './array-form.component';
// import { ValidFormComponent} from './valid-form.component';
// import { SubmitFormComponent} from './submit-form.component';

import {MatInputModule } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    // Import of the angular-material angular module
    AngularMaterialModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  declarations: [
    AppComponent,
    BasicFormComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
