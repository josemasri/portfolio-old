import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeroComponent } from './hero/hero.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [NavbarComponent, HeroComponent, PortfolioComponent],
  imports: [CommonModule, FontAwesomeModule],
  exports: [NavbarComponent, HeroComponent, PortfolioComponent],
})
export class ComponentsModule {}
