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
      data=>{
        alert("Experiencia creada con éxito");
        window.location.reload();
      }, err=>{
        alert("Error al crear la experiencia");
      }
    )
  }

  cancel(){
    this.modalService.dismissAll();
  }
}