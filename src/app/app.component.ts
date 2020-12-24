import { Component } from '@angular/core';
import { ContactFormService } from '../../src/app/services/contact-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-us-form';

  error: any;
  status: any;
  
  constructor(private contactFormService : ContactFormService){

  }

  contact: any ={
    name:'',
    email:'',
    msg:''
  }

  onSave(){
    if(!this.contact.name){
      this.error = "name is mandatory";
      return false;
    }
    if(!this.contact.email){
      this.error = "Please enter email";
      return false;
    }
    if (!(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(this.contact.email))) {
      this.error = "You have entered an invalid email address!";
      return false;
    }
    this.contactFormService.saveContactData(this.contact).subscribe( (res: any) =>{
      console.log("res",res);
      this.status = res.status;
    })
  }
}
