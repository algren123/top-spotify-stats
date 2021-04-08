import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  usersName: string;
  artistList: any = [];

  topArtist: string;
  topArtistImage: string;

  topTrack: string;
  topTrackImage: string;

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAccessToken();

    this.apiService.getUserInfo()
      .subscribe((data: any) => {
        console.log(data);
        this.usersName = data.display_name;
      });
    
    this.apiService.getTopArtist()
    .subscribe((data: any) => {
      this.topArtist = data.items[0].name;
      this.topArtistImage = data.items[0].images[0].url;
      // for (let i=0; i<data.items.length; i++) {
      //   this.artistList.push(data.items[i].name);
      // }
    }, (err) => {
      console.log(err);
      
    })

    this.apiService.getTopTrack()
      .subscribe((data: any) => {
        console.log(data);
        
        this.topTrack = data.items[0].name;
        this.topTrackImage = data.items[0].album.images[0].url;
      }, (err) => {
        console.log(err);
        
      })
  }

}
