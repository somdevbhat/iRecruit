import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Profile } from './profile';
import { ProfileService } from './profile.service';
import { DataService } from '../data-service/data.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, OnDestroy  {

  email: string;	
  profiles: Profile[];
   setEmailId(emailId: string){
      this.email = emailId;
  }
   /*@Input()
   set data(value: string) {
        this.dataService.serviceData = this.email;
    }
    get data():string {
        return this.dataService.serviceData;
    }*/

  constructor(private router: Router, private profileService: ProfileService, public dataService: DataService) {

  }

  ngOnInit() {
    this.profileService.getProfiles().then(profiles => this.profiles = profiles);
  }
  
  ngOnDestroy() {
  	this.dataService.serviceData = this.email;
  }

}
