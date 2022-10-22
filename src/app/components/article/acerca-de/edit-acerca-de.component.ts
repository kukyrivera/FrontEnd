import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {
  persona: Persona = null;

  constructor(private sPersona: PersonaService, private activatedRoute: ActivatedRoute, private router: Router, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id'];
    this.sPersona.detail(id).subscribe(
      data => {
        this.persona = data;
      }, err => {
        alert("Error al cargar persona");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRoute.snapshot.params['id'];
    this.persona.img = this.imageService.url;
    this.sPersona.update(id, this.persona).subscribe(
      data => {
        alert("Persona actualizada con éxito");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la persona");
      }
    )
  }

  uploadImage($event: any){
    const id = this.activatedRoute.snapshot.params['id'];
    const name = "profile" + id;
    this.imageService.uploadImage($event, name);
  }
}