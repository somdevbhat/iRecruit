import { Profile } from './profile';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { ProfileService } from './profile.service';
import { AppConstants } from '../app.constants';
import { ProfileComponent } from './profile.component';
import { DataService } from '../data-service/data.service';

declare var Materialize:any;

@Component({
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile.component.css'],
  providers: [ProfileService,ProfileComponent]
})

export class ProfileDetailsComponent implements OnInit {
  pageTitle: String = 'Profile Details';
  profile = new Profile();
  personalDetailsTab = true;
  educationalDetailsTab = false;
  otherInfoTab = false;
  emailId: String;
  ngAfterViewChecked() {
    Materialize.updateTextFields();
  }
 
 	
constructor(private activatedRoute: ActivatedRoute, private profileService: ProfileService,
    private router: Router, private profile1:ProfileComponent, public dataService: DataService) {
    this.emailId = this.dataService.serviceData; 
}
    
    
    /*get data():string {
        this.emailId = this.dataService.serviceData;
        return this.dataService.serviceData;
    }*/
    
  ngOnInit() {
    //const emailId = this.activatedRoute.snapshot.params['emailId'];
   
    
    this.profileService.getProfilesByEmail(this.emailId)
      .subscribe(response => {
        console.log(JSON.stringify(response));
        this.profile = response[0];
      
      });
  }
  
  showTab(tabName) {
    if (tabName === 'personalDetails') {
      this.personalDetailsTab = true;
      this.educationalDetailsTab = false;
      this.otherInfoTab = false;
    } else if (tabName === 'educationalDetails') {
      this.personalDetailsTab = false;
      this.educationalDetailsTab = true;
      this.otherInfoTab = false;
    } else {
      this.personalDetailsTab = false;
      this.educationalDetailsTab = false;
      this.otherInfoTab = true;
    }
  }
}