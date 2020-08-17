import { Component, OnInit }  from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

//formGroup is the class we use to tie different form controls into one group
//formBuilder makes it easier to build forms

@Component({
  selector: 'basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.css']
})

export class BasicFormComponent implements OnInit{

  myForm : FormGroup;
  constructor(private fb: FormBuilder){
  };

  ngOnInit(){

    this.myForm = this.fb.group({  //schema that defines the validation stauts and fields in your form
      email: '',
      message: '',
      career: ''
    });

    this.myForm.valueChanges.subscribe(console.log)

  }

}
