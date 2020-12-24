import { Injectable } from '@angular/core';
import { BackendService } from './backend.service';

@Injectable({
  providedIn: 'root'
})
export class ContactFormService {

  path = "contact"
  constructor(private backendService: BackendService) { }

  saveContactData(details){
    console.log("details",details);
    return this.backendService.post(this.path, details);
  }

}
