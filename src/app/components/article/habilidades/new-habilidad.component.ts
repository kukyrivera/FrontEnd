import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private sHabilidad: HabilidadService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const hab = new Habilidad(this.nombreHab, this.porcentajeHab);
    this.sHabilidad.save(hab).subscribe(
      data=>{
        alert("Habilidad creada con éxito");
        this.router.navigate(['']);
        this.modalService.dismissAll();
        window.location.reload();
      }, err=>{
        alert("Error al crear la habilidad");
        this.router.navigate(['']);
      }
    )
  }
}
