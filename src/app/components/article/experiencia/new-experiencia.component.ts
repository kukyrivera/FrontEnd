import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Experiencia } from 'src/app/model/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreExp: string = '';
  descripcionExp: string = '';

  constructor(private sExperiencia: ExperienciaService, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreExp, this.descripcionExp);
    this.sExperiencia.save(exp).subscribe(
      data => {
        alert("Experiencia creada con éxito");
        window.location.reload();
      }, err => {
        if (this.nombreExp == "") {
          alert("El nombre es obligatorio");
        } else
          if (this.descripcionExp == "") {
            alert("La descripción es obligatoria");
          } else
            if (this.nombreExp.length > 255) {
              alert("El nombre es muy largo");
            } else
              if (this.descripcionExp.length > 255) {
                alert("La descripción es muy larga");
              } else {
                alert("Error al crear experiencia: Puede que ese nombre o descripción ya existan en la base de datos o haya datos incorrectos");
              }
            }
    );
  }

  cancel() {
    this.modalService.dismissAll();
  }
}