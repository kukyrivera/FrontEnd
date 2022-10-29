import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit {
  nombreHab: string = '';
  porcentajeHab: number = 0;

  constructor(private sHabilidad: HabilidadService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hab = new Habilidad(this.nombreHab, this.porcentajeHab);
    this.sHabilidad.save(hab).subscribe(
      data => {
        alert("Habilidad creada con éxito");
        window.location.reload();
      }, err => {
        if (this.nombreHab == "") {
          alert("El nombre es obligatorio");
        } else
          if (this.porcentajeHab == 0) {
            alert("El porcentaje es obligatorio");
          } else
            if (this.nombreHab.length > 50) {
              alert("El nombre es muy largo");
            } else
              if (this.porcentajeHab < 0 && this.porcentajeHab > 100) {
                alert("El porcentaje debe ser entre 1% y 100%");
              } else {
                alert("Error al crear habilidad: Puede que ese nombre ya exista en la base de datos o haya datos incorrectos");
              }
      }
    );
  }

  cancel() {
    this.modalService.dismissAll();
  }
}
