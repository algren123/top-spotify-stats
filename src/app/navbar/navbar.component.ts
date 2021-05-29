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

  navbarHamburger: HTMLElement;

  constructor( 
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    const navbarExists = setInterval(() => {
      if (document.getElementById('mobile-menu') !== null) {
        this.navbarHamburger = document.getElementById('mobile-menu');
        clearInterval(navbarExists);
      }
    }, 1000);
    
    this.apiService.getAccessToken();

    this.homeLink = "/home?access_token=" + this.apiService.access_token;    
    this.profileLink = "/profile?access_token=" + this.apiService.access_token;
    this.statsLink = "/stats?access_token=" + this.apiService.access_token;

    this.apiService.getUserInfo()
      .subscribe((data: any) => {
        this.userProfilePicture = data.images[0].url;
      });
  }

  toggleNavbar() {
    // this.navbarHamburger = document.getElementById('mobile-menu')
    if (this.navbarHamburger.style.display === 'none') {
      this.navbarHamburger.style.display = 'block';
    } else {
      this.navbarHamburger.style.display = 'none';
    }
  }

}
