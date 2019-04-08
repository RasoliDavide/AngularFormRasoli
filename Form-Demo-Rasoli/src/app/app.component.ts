import { Component } from '@angular/core';
import {  //Importa FormBuilder e FormGroup
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form-Demo-Rasoli';
  myForm: FormGroup;
 constructor(fb: FormBuilder) {
   this.myForm = fb.group({
     'sku': ['ABC123', Validators.required]
   });
 }
 ngOnInit() {
 }

 onSubmit(value: string): void {
   console.log('you submitted value: ', value);
 }

}
