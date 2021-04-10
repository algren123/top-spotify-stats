import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usersName: string;
  userProfilePicture: string;
  artistList: any = [];

  topArtist4Weeks: string;
  topArtistImage4Weeks: string;
  topTrack4Weeks: string;
  topTrackImage4Weeks: string;

  topArtist6Months: string;
  topArtistImage6Months: string;
  topTrack6Months: string;
  topTrackImage6Months: string;

  topArtistAllTime: string;
  topArtistImageAllTime: string;
  topTrackAllTime: string;
  topTrackImageAllTime: string;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAccessToken();

    this.apiService.getUserInfo()
      .subscribe((data: any) => {
        this.usersName = data.display_name;
        this.userProfilePicture = data.images[0].url;     
      });
    
    this.apiService.getTopArtist4Weeks()
    .subscribe((data: any) => {  
      this.topArtist4Weeks = data.items[0].name;
      this.topArtistImage4Weeks = data.items[0].images[0].url;
    }, (err) => {
      console.log(err);
      
    })

    this.apiService.getTopTrack4Weeks()
      .subscribe((data: any) => {
        this.topTrack4Weeks = data.items[0].name;
        this.topTrackImage4Weeks = data.items[0].album.images[0].url;
      }, (err) => {
        console.log(err);
        
      })

    this.apiService.getTopArtist6Months()
      .subscribe((data: any) => {    
        this.topArtist6Months = data.items[0].name;
        this.topArtistImage6Months = data.items[0].images[0].url;
      })

    this.apiService.getTopTrack6Months()
      .subscribe((data: any) => {
        this.topTrack6Months = data.items[0].name;
        this.topTrackImage6Months = data.items[0].album.images[0].url;
      })

    this.apiService.getTopArtistAllTime()
      .subscribe((data: any) => {
        console.log(data + ' Algren');
        
        this.topArtistAllTime = data.items[0].name;
        this.topArtistImageAllTime = data.items[0].images[0].url;
      })

    this.apiService.getTopTrackAllTime()
      .subscribe((data: any) => {
        this.topTrackAllTime = data.items[0].name;
        this.topTrackImageAllTime = data.items[0].album.images[0].url;
      })
  }

}
