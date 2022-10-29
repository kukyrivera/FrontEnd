import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {

  @Input() proy: Proyecto;

  constructor(private sProy: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.proy.id;
    this.sProy.detail(id).subscribe(data => {
      this.proy = data;
    }, err => {
      console.log(err);
    })
  }

  updateProy(): void {
    const id = this.proy.id;
    this.sProy.update(id, this.proy).subscribe(data => {
      alert("Proyecto actualizado con éxito");
      window.location.reload();
    }, err => {
      if (this.proy.nombreProy == "") {
        alert("El nombre es obligatorio");
      } else
        if (this.proy.descripcionProy == "") {
          alert("La descripción es obligatoria");
        } else
          if (this.proy.nombreProy.length > 255) {
            alert("El nombre es muy largo");
          } else
            if (this.proy.descripcionProy.length > 255) {
              alert("La descripción es muy larga");
            } else {
              alert("Error al actualizar proyecto: Puede que ese nombre o descripción ya existan en la base de datos o haya datos incorrectos");
            }
    });
  }
}