import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  userProfilePicture: string;
  homeLink: string;
  profileLink: string;
  statsLink: string;

  constructor( 
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.apiService.getAccessToken();

    this.homeLink = "/home?access_token=" + this.apiService.access_token;    
    this.profileLink = "/profile?access_token=" + this.apiService.access_token;
    this.statsLink = "/stats?access_token=" + this.apiService.access_token;

    this.apiService.getUserInfo()
      .subscribe((data: any) => {
        this.userProfilePicture = data.images[0].url;
      });
  }

}
