import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ArtistModel, TrackModel } from '../artist-track';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  topArtist4Week: ArtistModel[] = [];
  topArtist6Month: ArtistModel[] = [];
  topArtistAllTime: ArtistModel[] = [];

  topTrack4Week: TrackModel[] = [];
  topTrack6Month: TrackModel[] = [];
  topTrackAllTime: TrackModel[] = [];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    this.apiService.getAccessToken();

    this.apiService.getTopArtist4Weeks()
      .subscribe((data: any) => {  
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            image: data.items[i].images[1].url,
            link: data.items[i].external_urls.spotify
          }
          this.topArtist4Week.push(info);
        }
      })

    this.apiService.getTopTrack4Weeks()
      .subscribe((data: any) => {
        console.log(data);
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            artist: data.items[i].artists[0].name,
            image: data.items[i].album.images[1].url,
            link: data.items[i].external_urls.spotify
          }
          this.topTrack4Week.push(info);
        }
      })

    this.apiService.getTopArtist6Months()
      .subscribe((data: any) => {    
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            image: data.items[i].images[1].url,
            link: data.items[i].external_urls.spotify
          }
          this.topArtist6Month.push(info);
        }
      })

    this.apiService.getTopTrack6Months()
      .subscribe((data: any) => {
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            artist: data.items[i].artists[0].name,
            image: data.items[i].album.images[1].url,
            link: data.items[i].external_urls.spotify
          }
          this.topTrack6Month.push(info);
        }
      })

    this.apiService.getTopArtistAllTime()
      .subscribe((data: any) => {      
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            image: data.items[i].images[1].url,
            link: data.items[i].external_urls.spotify
          }
          this.topArtistAllTime.push(info);
        }
      })

    this.apiService.getTopTrackAllTime()
      .subscribe((data: any) => {
        for (let i = 0; i < data.items.length; i++) {
          let info = {
            title: data.items[i].name,
            artist: data.items[i].artists[0].name,
            image: data.items[i].album.images[1].url,
            link: data.items[i].external_urls.spotify
          }
          this.topTrackAllTime.push(info);
        }
      })
  }

}
