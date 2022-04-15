import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-my-cool-form',
  templateUrl: './my-cool-form.component.html',
  styleUrls: ['./my-cool-form.component.css'],
})
export class MyCoolFormComponent implements OnInit {
  constructor() {}
  thePetName = '';
  @ViewChild('myEl', { static: true }) coolEl!: ElementRef;

  ngOnInit(): void {}

  submitForm(f: NgForm) {
    console.log(f);
  }

  // {
  //   pet:{petName:""}
  //   owner:{name:""}
  // }

  onSugestPetName(form: NgForm) {
    // form.form.setValue({
    //   email: '',
    //   owner: '',
    //   petAge: '',
    //   petName: 'Hammez',
    // });
    form.form.patchValue({
      petName: 'Hammez',
    });
  }

  onClearForm(form: NgForm) {
    form.reset();
  }
}
