import { Component, OnInit }  from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators} from '@angular/forms';

//formGroup is the class we use to tie different form controls into one group
//formBuilder makes it easier to build forms

@Component({
  selector: 'valid-form',
  templateUrl: './valid-form.component.html',
  styleUrls: ['./valid-form.component.css']
})
export class ValidFormComponent implements OnInit{

  myForm : FormGroup;
  
  constructor(private fb: FormBuilder){
  };

  ngOnInit(){
    
    const phone : FormGroup = this.fb.group({
      area : [],
      prefix : [],
      line : []
    })

    this.myForm = this.fb.group({  //schema that defines the validation stauts and fields in your form
      email : ['',[
        Validators.required,
        Validators.email
      ]],
      password : ['',[
        Validators.required,
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$')
      ]],
      age :[null, [
        Validators.required,
        Validators.minLength(2),
        Validators.min(18),
        Validators.max(65)
      ]],
      agree : [false, [
        Validators.requiredTrue
      ]]
    });
    
    this.myForm.valueChanges.subscribe(console.log)
    this.myForm.statusChanges.subscribe(console.log)
  }

  get email(){
    return this.myForm.get('email');
  }

  get password(){
    return this.myForm.get('password');
  }
  get age(){
    return this.myForm.get('age');
  }
  get agree(){
    return this.myForm.get('agree');
  }
}
