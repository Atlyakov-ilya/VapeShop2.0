import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../service/user.service';
import {User} from "../../../model/user";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;
  phoneNumberPattern = '^(\\+375|80)(29|25|44|33)(\\d{3})(\\d{2})(\\d{2})$';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.form = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      phoneNumber: new FormControl('', [Validators.required,
        Validators.pattern(this.phoneNumberPattern)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      verifyEmail: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl(),
      verifyPassword: new FormControl(),
      personalData: new FormControl(),
      subscribeToNews: new FormControl()

    });
  }

  registrationNewUser() {
    const user: User = this.form.value;
    this.userService.registrationNewUser(user).subscribe();
  }

}
