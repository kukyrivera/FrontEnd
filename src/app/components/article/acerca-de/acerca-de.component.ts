import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  
  persona: Persona;
  ActivateEditComp:boolean = false;

  constructor(public personaService: PersonaService, public tokenService: TokenService) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  closeClick(){
    this.ActivateEditComp = false;
    this.cargarPersona();
  }

  editPersona(item:any){
    this.persona = item;
    this.ActivateEditComp = true;
  }

  cargarPersona(): void {
    this.personaService.detail(1).subscribe(data => {
      this.persona = data;
    });
  }
}
