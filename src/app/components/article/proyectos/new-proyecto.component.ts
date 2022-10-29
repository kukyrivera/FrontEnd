import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  nombreProy: string = '';
  descripcionProy: string = '';

  constructor(private sProy: ProyectoService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyecto(this.nombreProy, this.descripcionProy);
    this.sProy.save(proy).subscribe(
      data => {
        alert("Proyecto creado con éxito");
        window.location.reload();
      }, err => {
        if (this.nombreProy == "") {
          alert("El nombre es obligatorio");
        } else
          if (this.descripcionProy == "") {
            alert("La descripción es obligatoria");
          } else
            if (this.nombreProy.length > 255) {
              alert("El nombre es muy largo");
            } else
              if (this.descripcionProy.length > 255) {
                alert("La descripción es muy larga");
              } else {
                alert("Error al crear proyecto: Puede que ese nombre o descripción ya existan en la base de datos o haya datos incorrectos");
              }
      }
    );
  }

  cancel() {
    this.modalService.dismissAll();
  }
}