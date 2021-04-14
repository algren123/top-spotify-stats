import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  access_token:string;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
    ) { }

  getAccessToken() {
    this.route.queryParams
    .subscribe((params) => {
      this.access_token = params['access_token'];
      console.log(this.access_token);
    })
}

  getUserInfo() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.access_token
    })
    return this.http.get('https://api.spotify.com/v1/me/', { headers })
  }

  getTopArtist4Weeks() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.access_token
    })
     return this.http.get(`https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=50`, { headers })
  }

  getTopTrack4Weeks() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.access_token
    })
     return this.http.get(`https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=50`, { headers })
  }

  getTopArtist6Months() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.access_token
    })
     return this.http.get(`https://api.spotify.com/v1/me/top/artists?time_range=medium_term&limit=50`, { headers })
  }

  getTopTrack6Months() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.access_token
    })
     return this.http.get(`https://api.spotify.com/v1/me/top/tracks?time_range=medium_term&limit=50`, { headers })
  }

  getTopArtistAllTime() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.access_token
    })
     return this.http.get(`https://api.spotify.com/v1/me/top/artists?time_range=long_term&limit=50`, { headers })
  }

  getTopTrackAllTime() {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.access_token
    })
     return this.http.get(`https://api.spotify.com/v1/me/top/tracks?time_range=long_term&limit=50`, { headers })
  }

  getUserTracks(offset) {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.access_token
    })
    return this.http.get(`https://api.spotify.com/v1/me/tracks?limit=50&offset=${offset}`, { headers })
  }
  
}
