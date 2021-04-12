import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userProfilePicture: string;
  userName: string;
  userLink: string;
  userFollowers: string;
  accountStatus: string;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAccessToken();
    this.apiService.getUserInfo()
      .subscribe((data: any) => {
        this.userProfilePicture = data.images[0].url;
        this.userName = data.display_name;
        this.userLink = data.external_urls.spotify;
        this.userFollowers = data.followers.total;
        this.accountStatus = data.product;
      });
  }

}
