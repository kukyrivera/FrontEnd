import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {
  nombreEd: string;
  descripcionEd: string;

  constructor(private sEducacion: EducacionService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEd, this.descripcionEd);
    this.sEducacion.save(educacion).subscribe(
      data => {
        alert("Educación creada con éxito");
        window.location.reload();
      }, err => {
        if (this.nombreEd == "") {
          alert("El nombre es obligatorio");
        } else
          if (this.descripcionEd == "") {
            alert("La descripción es obligatoria");
          } else
            if (this.nombreEd.length > 255) {
              alert("El nombre es muy largo");
            } else
              if (this.descripcionEd.length > 255) {
                alert("La descripción es muy larga");
              } else {
                alert("Error al crear educación: Puede que ese nombre o descripción ya existan en la base de datos o haya datos incorrectos");
              }
      }
    );
  }

  cancel() {
    this.modalService.dismissAll();
  }
}
