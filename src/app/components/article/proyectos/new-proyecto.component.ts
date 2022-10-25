import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private sProy: ProyectoService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const proy = new Proyecto(this.nombreProy, this.descripcionProy);
    this.sProy.save(proy).subscribe(
      data=>{
        alert("Proyecto creado con éxito");
        window.location.reload();
      }, err=>{
        alert("Error al crear el proyecto");
      }
    )
  }

  cancel(){
    this.modalService.dismissAll();
  }
}