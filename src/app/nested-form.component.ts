import { Component, OnInit }  from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

//formGroup is the class we use to tie different form controls into one group
//formBuilder makes it easier to build forms

@Component({
  selector: 'nested-form',
  templateUrl: './nested-form.component.html',
  styleUrls: ['./nested-form.component.css']
})

export class NestedFormComponent implements OnInit{

  myForm : FormGroup;
  constructor(private fb: FormBuilder){};

  //phone : FormGroup[];

  ngOnInit(){
    const phone : FormGroup = this.fb.group({
      area: [],
      prefix: [],
      line : []
    })

    this.myForm = this.fb.group({  
      email: '',
      homePhone : phone,
      cellPhone : phone
    });

    this.myForm.valueChanges.subscribe(console.log)

  }

}
