import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/service/habilidad.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habList: Habilidad[] = [];
  title = 'appBootstrap';
  closeResult: string = '';
  ActivateEditComp: boolean = false;
  hab: Habilidad;

  constructor(private sHabilidad: HabilidadService, private tokenService: TokenService, private modalService: NgbModal) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  closeClick() {
    this.ActivateEditComp = false;
    this.cargarHabilidad();
  }

  editHab(item: any) {
    this.hab = item;
    this.ActivateEditComp = true;
  }

  cargarHabilidad(): void {
    this.sHabilidad.lista().subscribe(data => {
      this.habList = data;
    })
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sHabilidad.delete(id).subscribe(
        data => {
          this.cargarHabilidad();
        }, err => {
          alert("Error al borrar la habilidad");
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