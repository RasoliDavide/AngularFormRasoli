import { Component, OnInit } from '@angular/core';
import { 
  FormBuilder,
  FormGroup
} from '@angular/forms';
@Component({
  selector: 'app-multi-input',
  templateUrl: './multi-input.component.html',
  styleUrls: ['./multi-input.component.css']
})
export class MultiInputComponent implements OnInit {
  myForm: FormGroup;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group(
      {
        'nome' : [''],
        'cognome' : [''],
        'username' : [''],
        'email': [''],
        'password' : ['']
      }
    )
   }

  ngOnInit() {
  }

}
