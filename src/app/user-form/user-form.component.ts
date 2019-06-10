import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit {

  rForm: FormGroup;

  constructor(private fb: FormBuilder) { 
  }

  ngOnInit() {
    this.rForm = this.fb.group({
      firstname: [null, [
        Validators.required, 
        Validators.maxLength(30),
      ]],
      lastname: [null, [
        Validators.required, 
        Validators.maxLength(30),
      ]],
      creditscore: [null,[
        Validators.required,
        Validators.min(1),
        Validators.max(850),
      ]],
      annualincome: [null,[
        Validators.required,
        Validators.min(10),
      ]],
    })

    // this.rForm.valueChanges.subscribe(data => console.log(data));

  }

  get firstName(){
    return this.rForm.get('firstname');
  }

  get lastName(){
    return this.rForm.get('lastname');
  }

  get creditScore(){
    return this.rForm.get('creditscore');
  }

  get annualIncome(){
    return this.rForm.get('annualincome');
  }

}
