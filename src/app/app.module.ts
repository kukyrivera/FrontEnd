import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BannerComponent } from './components/header/banner/banner.component';
import { AcercaDeComponent } from './components/article/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/article/experiencia/experiencia.component';
import { EducacionComponent } from './components/article/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HabilidadesComponent } from './components/article/habilidades/habilidades.component';
import { NavComponent } from './components/header/nav/nav.component';
import { ProyectosComponent } from './components/article/proyectos/proyectos.component';
import { ArticleComponent } from './components/article/article.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './components/article/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/article/experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './components/article/educacion/new-educacion.component';
import { EditEducacionComponent } from './components/article/educacion/edit-educacion.component';
import { NewHabilidadComponent } from './components/article/habilidades/new-habilidad.component';
import { EditHabilidadComponent } from './components/article/habilidades/edit-habilidad.component';
import { NewProyectoComponent } from './components/article/proyectos/new-proyecto.component';
import { EditProyectoComponent } from './components/article/proyectos/edit-proyecto.component';
import { EditAcercaDeComponent } from './components/article/acerca-de/edit-acerca-de.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideStorage,getStorage } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HabilidadesComponent,
    NavComponent,
    ProyectosComponent,
    ArticleComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NewEducacionComponent,
    EditEducacionComponent,
    NewHabilidadComponent,
    EditHabilidadComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    EditAcercaDeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    BrowserModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideStorage(() => getStorage())
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
