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

@NgModule({
  imports: [ 
    BrowserModule,
    ReactiveFormsModule,
    // Import of the angular-material angular module
    AngularMaterialModule
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
