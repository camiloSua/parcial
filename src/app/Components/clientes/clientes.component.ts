import { Component } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor(public api:ApiService){

  }
  ngOnInit(): void{
    var response=this.api.getAll("Clientes")
    console.log(response);
   }
}
