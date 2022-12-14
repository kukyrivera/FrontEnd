import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyList: Proyecto[] = [];
  title = 'appBootstrap';
  closeResult: string = '';
  ActivateEditComp: boolean = false;
  proy: Proyecto;

  constructor(private sProy: ProyectoService, private tokenService: TokenService, private modalService: NgbModal) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyecto();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  closeClick() {
    this.ActivateEditComp = false;
    this.cargarProyecto();
  }

  editProy(item: any) {
    this.proy = item;
    this.ActivateEditComp = true;
  }

  cargarProyecto(): void {
    this.sProy.lista().subscribe(data => {
      this.proyList = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sProy.delete(id).subscribe(
        data => {
          this.cargarProyecto();
        }, err => {
          alert("Error al borrar el proyecto");
          window.location.reload();
        }
      )
    }
  }

  open(content: any) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
