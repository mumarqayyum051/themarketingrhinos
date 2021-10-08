import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageRoutingModule } from './pages-routing.module';
import { HeroComponent } from './hero/hero.component';

@NgModule({
  imports: [CommonModule, PageRoutingModule],
  declarations: [
    PagesComponent,
    HeroComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [PagesComponent],
})
export class PagesModule {}
