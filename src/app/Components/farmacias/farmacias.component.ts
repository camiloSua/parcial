import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-farmacias',
  templateUrl: './farmacias.component.html',
  styleUrls: ['./farmacias.component.css']
})
export class FarmaciasComponent {
  constructor(public api:ApiService){

  }

  ngOnInit(): void{
    var response=this.api.getAll("Farmacias")
    console.log(response);
   }
}
