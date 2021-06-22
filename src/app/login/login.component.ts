import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/shared/services/validation.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private formBuilder: FormBuilder,public validationService:ValidationService) {}

  loginForm = this.formBuilder.group(
    {
        email: new FormControl('',[Validators.required]),
        password: new FormControl('',[Validators.required]),
        agentEmail: new FormControl('',[Validators.required, ValidationService.emailValidator]),
    });



  login(): void
  {
    if(this.loginForm.get('email')?.value == "test@test.com" && this.loginForm.get('password')?.value == "12345")
    {
      this.router.navigateByUrl('gallery');
    }
  }

  ngOnInit(): void {
  }

}
