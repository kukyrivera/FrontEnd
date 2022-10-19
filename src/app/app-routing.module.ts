import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditAcercaDeComponent } from './components/article/acerca-de/edit-acerca-de.component';
import { EditEducacionComponent } from './components/article/educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/article/experiencia/edit-experiencia.component';
import { EditHabilidadComponent } from './components/article/habilidades/edit-habilidad.component';
import { EditProyectoComponent } from './components/article/proyectos/edit-proyecto.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'edithab/:id', component: EditHabilidadComponent },
  { path: 'editproy/:id', component: EditProyectoComponent },
  { path: 'editacercade/:id', component: EditAcercaDeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
