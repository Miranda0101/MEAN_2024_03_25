import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  // FormControl
  // username = new FormControl('');
  email = new FormControl('');

  // FormGroup
  contactForm: FormGroup = new FormGroup({
    'username': new FormControl(''),
    'email': this.email,
    'message': new FormControl('')
  })
  messageForm: any;
  // FormArray
  topicList = [ {id: 1, name: 'Product Quality'}, {id: 2, name: 'Logistic Issue'},
  {id: 3, name: 'Customer Service'}];

  // FormBuilder
  constructor(private fb: FormBuilder) { 
    
    // this.contactForm.addControl('topics', topics)
    // console.log(topics)
  }

  ngOnInit(): void {
    // console.log(this.username)
    // console.log(this.contactForm)
    this.initializeForm();
    
  }

  initializeForm(){
    const controls = this.topicList.map((val)=> new FormControl(''));
    let topics = new FormArray(controls);
    this.messageForm = this.fb.group({
      username: ['',Validators.required],
      email: ['',[Validators.required, Validators.email]],
      message: ['Please leave your feedback', Validators.minLength(10)],
      topics: this.fb.array(controls),
    })
  }

  onClick(){
    console.log(this.messageForm);
  }

  get emailControl(){
    return this.messageForm.get('email')
  }
  get topicControls(){
    // console.log(this.messageForm.get('topics'))
    return this.messageForm.get('topics') as FormArray;
  }

}
