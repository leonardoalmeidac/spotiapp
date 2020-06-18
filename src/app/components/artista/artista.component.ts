import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: []
})
export class ArtistaComponent {

  cantante : any = {}
  topTracks : any = {}
  loading : boolean

  constructor( private router : ActivatedRoute,
               private spotify : SpotifyService ) {
    this.router.params.subscribe( params =>{
    this.getArtista(params['id'])
    this.getTopTracks(params['id'])
    })
  }

  getArtista(id : string){
    this.loading = true
    this.spotify.getArtista(id)
        .subscribe( artista => {
          console.log(artista)
          this.cantante = artista 
          this.loading = false
        })
  }


  getTopTracks( id : string){
    this.spotify.getTopTracks(id)
        .subscribe( tracks => {
          console.log(tracks)
          this.topTracks = tracks
        })
  }
   


}
