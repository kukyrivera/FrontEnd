import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private sExperiencia: ExperienciaService, private router: Router, private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  onCreate(): void {
    const exp = new Experiencia(this.nombreExp, this.descripcionExp);
    this.sExperiencia.save(exp).subscribe(
      data=>{
        alert("Experiencia creada con éxito");
        this.router.navigate(['']);
        this.modalService.dismissAll();
        window.location.reload();
      }, err=>{
        alert("Error al crear la experiencia");
        this.router.navigate(['']);
      }
    )
  }
}