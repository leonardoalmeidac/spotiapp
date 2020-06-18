import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  

  constructor( private http : HttpClient) { 
  }
  getQuery( query : string){
    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer BQB8qa4hp6DO_QL_vTfPA2mAoZci34sYRbY4Jw8KEs15pj8v0yW6yn4XVLhH9B2hPjEU6KHJLN8zwSrZAxY'
      })
    return this.http.get(url,{ headers })
  }

  getNewReleases(){
    return this.getQuery('browse/new-releases')
               .pipe(map( data =>  data['albums'].items ))
  }

  getArtists( termino : string){
    return this.getQuery(`search?q=${termino}&type=artist&limit=15`)
               .pipe(map(data => data['artists'].items ))
  }
  
  getArtista( id : string){
    return this.getQuery(`artists/${id}`)
              // .pipe(map(data => data['artists'].items ))
  }

  getTopTracks( id : string){
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
               .pipe(map(data => data['tracks']))

  }
}
