import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  albums : any [] = []
  loading : boolean
  error : boolean = false 
  mensaje : string 

  constructor( private spotify : SpotifyService ) { 

    this.loading = true
      this.spotify.getNewReleases()
          .subscribe( (data) => {
            //console.log(data)
            this.albums =  data
            this.loading = false
          }, (err => {
            this.loading = false
            this.error = true
             this.mensaje = err.error.error.message
          }))
  }


  ngOnInit() {
  }

}
