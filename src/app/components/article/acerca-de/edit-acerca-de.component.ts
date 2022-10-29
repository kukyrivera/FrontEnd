import { Component, Input, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { ImageService } from 'src/app/service/image.service';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-acerca-de',
  templateUrl: './edit-acerca-de.component.html',
  styleUrls: ['./edit-acerca-de.component.css']
})
export class EditAcercaDeComponent implements OnInit {

  @Input() persona: Persona;

  constructor(private sPersona: PersonaService, public imageService: ImageService) { }

  ngOnInit(): void {
    const id = this.persona.id;
    this.sPersona.detail(id).subscribe(data => {
      this.persona = data;
    }, err => {
      console.log(err);
      alert("Error al cargar persona");
      window.location.reload();
    })
  }

  updatePersona(): void {
    const id = this.persona.id;
    this.persona.img = this.imageService.url;
    this.sPersona.update(id, this.persona).subscribe(data => {
      alert("Persona actualizada con éxito");
      window.location.reload();
    }, err => {
      if (this.persona.nombre == "") {
        alert("El nombre es obligatorio");
      } else
        if (this.persona.apellido == "") {
          alert("El apellido es obligatorio");
        } else
          if (this.persona.img == "") {
            alert("La imágen es obligatoria");
          } else
            if (this.persona.descripcion == "") {
              alert("La descripción es obligatoria");
            } else
              if (this.persona.nombre.length > 50) {
                alert("El nombre es muy largo");
              } else
                if (this.persona.apellido.length > 50) {
                  alert("El apellido es muy largo");
                } else
                  if (this.persona.img.length > 255) {
                    alert("La ruta de la imágen es muy larga");
                  } else
                    if (this.persona.descripcion.length > 255) {
                      alert("La descripción es muy larga");
                    } else {
                      alert("Error al actualizar persona: Puede que esa persona ya exista en la base de datos o haya datos incorrectos");
                    }
    });
  }

  uploadImage($event: any) {
    const id = this.persona.id;
    const name = "profile" + id;
    this.imageService.uploadImage($event, name);
  }
}