import { Component, Input, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {

  @Input() edu: Educacion;

  constructor(private sEdu: EducacionService) { }

  ngOnInit(): void {
    const id = this.edu.id;
    this.sEdu.detail(id).subscribe(data => {
      this.edu = data;
    }, err => {
      console.log(err);
    })
  }

  updateEdu(): void {
    const id = this.edu.id;
    this.sEdu.update(id, this.edu).subscribe(data => {
      alert("Educación actualizada con éxito");
      window.location.reload();
    }, err => {
      if (this.edu.nombreEd == "") {
        alert("El nombre es obligatorio");
      } else
        if (this.edu.descripcionEd == "") {
          alert("La descripción es obligatoria");
        } else
          if (this.edu.nombreEd.length > 255) {
            alert("El nombre es muy largo");
          } else
            if (this.edu.descripcionEd.length > 255) {
              alert("La descripción es muy larga");
            } else {
              alert("Error al actualizar educación: Puede que ese nombre o descripción ya existan en la base de datos");
            }
    });
  }
}
