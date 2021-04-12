import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ArtistTrack } from '../artist-track';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {
  topArtist: ArtistTrack[] = [];

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
            image: data.items[i].images[2].url,
            link: data.items[i].external_urls.spotify
          }
          this.topArtist.push(info);
        }

        console.log(this.topArtist);
      })

    this.apiService.getTopTrack4Weeks()
      .subscribe((data: any) => {

      })

    this.apiService.getTopArtist6Months()
      .subscribe((data: any) => {    

      })

    this.apiService.getTopTrack6Months()
      .subscribe((data: any) => {

      })

    this.apiService.getTopArtistAllTime()
      .subscribe((data: any) => {      

      })

    this.apiService.getTopTrackAllTime()
      .subscribe((data: any) => {

      })
  }

}
