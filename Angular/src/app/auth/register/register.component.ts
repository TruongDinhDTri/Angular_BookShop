import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/app/types/Auth';
import { NgModel } from '@angular/forms';
import { Confirm } from 'src/app/types/Confirm';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  form: Confirm = {
    email: '',
    password: '',
    confirmation_password: '',
  };

  constructor() {}

  ngOnInit(): void {}
}
