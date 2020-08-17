import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { AngularMaterialModule } from '../angular-material/angular-material.module';
import { BasicFormComponent} from './basic-form.component';
import { NestedFormComponent} from './nested-form.component';
import { ArrayFormComponent} from './array-form.component';
import { ValidFormComponent} from './valid-form.component';
// import { SubmitFormComponent} from './submit-form.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule, MatSelectModule, MatButtonModule, MatCheckboxModule, MatChipsModule } from '@angular/material';


@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatCheckboxModule,
    MatChipsModule
  ],
  declarations: [
    AppComponent,
    BasicFormComponent,
    NestedFormComponent,
    ArrayFormComponent,
    ValidFormComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
