import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-farmacos',
  templateUrl: './farmacos.component.html',
  styleUrls: ['./farmacos.component.css']
})
export class FarmacosComponent {
  constructor(public api:ApiService){


  }
  ngOnInit(): void{
    var response=this.api.getAll("Farmacos")
    console.log(response);
   }
}
