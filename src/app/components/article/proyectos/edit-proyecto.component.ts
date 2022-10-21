import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proy: Proyecto = null;

  constructor(private sProy: ProyectoService, private activatedRouter: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProy.detail(id).subscribe(data =>{
        this.proy = data;
      }, err =>{
        alert("Error al cargar proyecto");
        this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProy.update(id, this.proy).subscribe(
      data => {
        alert("Proyecto actualizado con éxito");
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar proyecto");
      }
    )
  }
}