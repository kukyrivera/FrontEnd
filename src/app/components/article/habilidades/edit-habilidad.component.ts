import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit {
  hab: Habilidad = null;

  constructor(private sHabilidad: HabilidadService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.detail(id).subscribe(data =>{
        this.hab = data;
      }, err =>{
        alert("Error al cargar habilidad");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sHabilidad.update(id, this.hab).subscribe(
      data => {
        alert("Habilidad actualizada con éxito");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar habilidad");
      }
    )
  }
}
