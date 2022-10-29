import { Component, Input, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {

  @Input() hab: Habilidad;

  constructor(private sHabilidad: HabilidadService) { }

  ngOnInit(): void {
    const id = this.hab.id;
    this.sHabilidad.detail(id).subscribe(data => {
      this.hab = data;
    }, err => {
      console.log(err);
    })
  }

  updateHab(): void {
    const id = this.hab.id;
    this.sHabilidad.update(id, this.hab).subscribe(data => {
      alert("Habilidad actualizada con éxito");
      window.location.reload();
    }, err => {
      if (this.hab.nombreHab == "") {
        alert("El nombre es obligatorio");
      } else
        if (this.hab.porcentajeHab == 0) {
          alert("El porcentaje es obligatorio");
        } else
          if (this.hab.nombreHab.length > 50) {
            alert("El nombre es muy largo");
          } else
            if (this.hab.porcentajeHab < 0 && this.hab.porcentajeHab > 100) {
              alert("El porcentaje debe ser entre 1% y 100%");
            } else {
              alert("Error al actualizar habilidad: Puede que ese nombre o descripción ya existan en la base de datos o haya datos incorrectos");
            }
    });
  }
}
