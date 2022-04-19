import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  myForm!: FormGroup;

  constructor(private http: HttpClient) {}

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

  getAllUsers = () => {
    this.http
      .get('https://api.mazimobility.xyz/api/battery/fetch', {
        headers: new HttpHeaders({
          token:
            'dsbfghfvcdfv eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Imtub3dhcnRodXJAZ21haWwuY29tIiwiaWF0IjoxNjUwMzQ5MzE0LCJleHAiOjE2NTAzNzgxMTR9.HTJWeKQ-TvydJWj3JKQg8wQH30ohJ5z2vDctUa9d-sQ',
        }),
      })
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };
}
