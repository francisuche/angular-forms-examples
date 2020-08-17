import { Component, OnInit }  from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

//formGroup is the class we use to tie different form controls into one group
//formBuilder makes it easier to build forms

@Component({
  selector: 'array-form',
  templateUrl: './array-form.component.html',
  styleUrls: ['./array-form.component.css']
})

export class ArrayFormComponent implements OnInit{

  myForm : FormGroup;
  constructor(private fb: FormBuilder, private fa: FormArray){
  };

  ngOnInit(){
    
    const phone : FormGroup = this.fb.group({
      area : [],
      prefix : [],
      line : []
    })

    this.myForm = this.fb.group({  //schema that defines the validation stauts and fields in your form
      email : '',
      phones : this.fb.array([])
    });
    
    this.myForm.valueChanges.subscribe(console.log)
  }

  get PhoneForms(){
    return this.myForm.get('phones') as FormArray;
  }

   addNewPhone(){
     const newPhone : FormGroup = this.fb.group({
        area: [],
        prefix: [],
        line : []
      });
      this.PhoneForms.push(newPhone);
    }

    deletePhone(i){
            this.PhoneForms.removeAt(i);
    }

}
