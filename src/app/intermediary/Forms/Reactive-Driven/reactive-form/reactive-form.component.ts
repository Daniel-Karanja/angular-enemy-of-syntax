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
  userName = 'Daniel-Karanja';
  token = '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';

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
      .get(
        `https://${this.userName}:${this.token}@api.github.com/users/octocat`
      )
      .subscribe(
        (response) => {
          console.log(response);
        },
        (e) => {
          console.log(e);
        }
      );

    // this.http.get('https://api.github.com/users').subscribe((response) => {
    //   console.log(response);
    // });
    // this.http
    //   .post('https://api.mazimobility.xyz/api/user/login', {
    //     email: 'knowarthur@gmail.com',
    //     password: '1234rffdgfd',
    //   })
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // this.http
    //   .get('https://api.mazimobility.xyz/api/battery/fetch?page=1&limit=10', {
    //     headers: new HttpHeaders({
    //       token:
    //         'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Imtub3dhcnRodXJAZ21haWwuY29tIiwiaWF0IjoxNjUwMzYxMTM3LCJleHAiOjE2NTAzODk5Mzd9.8T1J47GydZW1eOErLL1ru2UumFwm3aMVBXx8D2HyQ98',
    //     }),
    //   })
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (e) => {
    //       console.log(e);
    //     }
    //   );
    // this.http
    //   .post(
    //     'https://api.mazimobility.xyz/api/user/create',
    //     {
    //       name: 'Yvone Muthui',
    //       email: 'yvon2@yvin.com',
    //       phone: '4535646456',
    //       role: 'admin',
    //       password: '1234',
    //     },
    //     {
    //       headers: new HttpHeaders({
    //         token:
    //           'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYWRtaW4iLCJlbWFpbCI6Imtub3dhcnRodXJAZ21haWwuY29tIiwiaWF0IjoxNjUwMzYxMTM3LCJleHAiOjE2NTAzODk5Mzd9.8T1J47GydZW1eOErLL1ru2UumFwm3aMVBXx8D2HyQ98',
    //       }),
    //     }
    //   )
    //   .subscribe(
    //     (response) => {
    //       console.log(response);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
  };
}
