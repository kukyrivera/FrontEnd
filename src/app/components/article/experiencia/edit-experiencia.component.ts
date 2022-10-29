import { Component, Input, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css']
})
export class EditExperienciaComponent implements OnInit {

  @Input() exp: Experiencia;

  constructor(private sExp: ExperienciaService) { }

  ngOnInit(): void {
    const id = this.exp.id;
    this.sExp.detail(id).subscribe(data => {
      this.exp = data;
    }, err => {
      console.log(err);
    })
  }

  updateExp(): void {
    const id = this.exp.id;
    this.sExp.update(id, this.exp).subscribe(data => {
      alert("Experiencia actualizada con éxito");
      window.location.reload();
    }, err => {
      if (this.exp.nombreExp == "") {
        alert("El nombre es obligatorio");
      } else
        if (this.exp.descripcionExp == "") {
          alert("La descripción es obligatoria");
        } else
          if (this.exp.nombreExp.length > 255) {
            alert("El nombre es muy largo");
          } else
            if (this.exp.descripcionExp.length > 255) {
              alert("La descripción es muy larga");
            } else {
              alert("Error al actualizar experiencia: Puede que ese nombre o descripción ya existan en la base de datos o haya datos incorrectos");
            }
    });
  }
}