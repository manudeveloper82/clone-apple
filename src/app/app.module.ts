import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CarrosselComponent } from './component/carrossel/carrossel.component';
import { CarrosselAComponent } from './component/carrossel-a/carrossel-a.component';
import { CarrosselBComponent } from './component/carrossel-b/carrossel-b.component';
import { CarrosselCComponent } from './component/carrossel-c/carrossel-c.component';
import { LojaComponent } from './component/loja/loja.component';
import { MenuComponent } from './component/menu/menu.component';
import { EducacaoComponent } from './component/educacao/educacao.component';
import { EspecialistaComponent } from './component/especialista/especialista.component';
import { LinksComponent } from './component/links/links.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarrosselComponent,
    CarrosselAComponent,
    CarrosselBComponent,
    CarrosselCComponent,
    LojaComponent,
    MenuComponent,
    EducacaoComponent,
    EspecialistaComponent,
    LinksComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
