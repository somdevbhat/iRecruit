import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from '../login/loginUser.component';

import { ProfileComponent } from '../profile/profile.component';

import { ProfileDetailsComponent } from '../profile/profile-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'profiles', component: ProfileComponent },
  { path: 'profiles',
            children: [
              {
                path: ':emailId',
                component: ProfileDetailsComponent
              }
            ]
   }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }