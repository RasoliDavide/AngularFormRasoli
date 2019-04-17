import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-multi-input',
  templateUrl: './multi-input.component.html',
  styleUrls: ['./multi-input.component.css']
})
export class MultiInputComponent implements OnInit {
  myForm : FormGroup;

  constructor (fb: FormBuilder)
  {
    this.myForm = fb.group({
      'nome' : ['', Validators.required],
      'cognome':[''],
      'email':[''],
      'username':[''],
      'password':['']
    })

  }
  btnClick(n : HTMLInputElement, cn: HTMLInputElement, m: HTMLInputElement, un: HTMLInputElement, pw: HTMLInputElement):Boolean
  {
    if(this. myForm.valid)
    {
      console.log("Nome: " + this.myForm.controls['nome'].value);
      console.log("Cognome: " + this.myForm.controls['cognome'].value);
      console.log("Mail: " + this.myForm.controls['email'].value);
      console.log("Username: " + this.myForm.controls['username'].value);
      console.log("Password: " + this.myForm.controls['password'].value);
    }
    else
    {
      console.log("NOH");
    }
    return false;
  }
  ngOnInit() {
  }

}
