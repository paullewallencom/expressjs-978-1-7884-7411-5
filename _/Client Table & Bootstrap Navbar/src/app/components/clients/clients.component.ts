import { Component, OnInit } from '@angular/core';
import {ClientService} from '../../services/client.service';

@Component({
  selector: 'clients',
  templateUrl: './clients.component.html'
})
export class ClientsComponent implements OnInit{
  clients;
  constructor(private clientService: ClientService){

  }

 ngOnInit(){
   this.clientService.getClients().subscribe(clients => {
     this.clients = clients;
   });
 }
}
