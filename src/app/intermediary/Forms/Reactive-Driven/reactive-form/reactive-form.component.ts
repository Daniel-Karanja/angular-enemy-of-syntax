import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  myForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
    this.myForm = new FormGroup({
      petName: new FormControl('', Validators.required),
      petAge: new FormControl(0),
      // name: new FormControl(''),
      // email: new FormControl('', [Validators.email, Validators.required]),
      user: new FormGroup({
        name: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
      }),
    });
  }

  onSubmit = () => {
    console.log(this.myForm);
  };
}
