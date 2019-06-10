import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.sass']
})
export class UserFormComponent implements OnInit {

  rForm: FormGroup;
  post: any;
  description: string = '';
  name: string = '';

  constructor(private fb: FormBuilder) { 
    // this.rForm = fb.group({
    //   'name': [null, Validators.required],
    //   'description': [null, Validators.
    //     compose([Validators.required, Validators.minLength(30), Validators.maxLength(500)])],
    //   'validate' : ''
    // })
  }

  addPost(post){
    this.description = post.description; 
    this.name = post.name;
  }

  ngOnInit() {
    // this.rForm = this.fb.group({
    //   firstname: 'default first name',
    //   lastname: 'default last name',
    //   creditscore: 'default credit',
    //   annualincome: 'default anual',
    // })

    this.rForm = this.fb.group({
      firstname: ['default first name', [Validators.required, Validators.maxLength(300)]],
      lastname: 'default last name',
      creditscore: 'default credit',
      annualincome: 'default anual',
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
