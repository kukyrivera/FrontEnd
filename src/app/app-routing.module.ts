import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/article/educacion/edit-educacion.component';
import { EditExperienciaComponent } from './components/article/experiencia/edit-experiencia.component';
import { EditHabilidadComponent } from './components/article/habilidades/edit-habilidad.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'editedu/:id', component: EditEducacionComponent },
  { path: 'edithab/:id', component: EditHabilidadComponent },
  { path: 'editproy/:id', component: EditHabilidadComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
