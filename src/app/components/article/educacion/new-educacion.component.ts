import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private sEducacion: EducacionService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const educacion = new Educacion(this.nombreEd, this.descripcionEd);
    this.sEducacion.save(educacion).subscribe(
      data => {
        alert("Educación creada con éxito");
        window.location.reload();
      }, err => {
        alert("Error al crear educación");
      }
    )
  }

  cancel(){
    this.modalService.dismissAll();
  }
}
