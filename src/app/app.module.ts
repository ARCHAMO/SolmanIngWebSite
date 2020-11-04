import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderSectionComponent } from './component/header-section/header-section.component';
import { SliderSectionComponent } from './component/slider-section/slider-section.component';
import { BoxedSectionComponent } from './component/boxed-section/boxed-section.component';
import { ServiceSectionComponent } from './component/service-section/service-section.component';
import { CompanySectionComponent } from './component/company-section/company-section.component';
import { PortfolioSectionComponent } from './component/portfolio-section/portfolio-section.component';
import { FeaturedSectionComponent } from './component/featured-section/featured-section.component';
import { TeamSectionComponent } from './component/team-section/team-section.component';
import { CounterSectionComponent } from './component/counter-section/counter-section.component';
import { ProjectSectionComponent } from './component/project-section/project-section.component';
import { TestimonialSectionComponent } from './component/testimonial-section/testimonial-section.component';
import { ClientSectionComponent } from './component/client-section/client-section.component';
import { FooterSectionComponent } from './component/footer-section/footer-section.component';
import { CopyrightSectionComponent } from './component/copyright-section/copyright-section.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderSectionComponent,
    SliderSectionComponent,
    BoxedSectionComponent,
    ServiceSectionComponent,
    CompanySectionComponent,
    PortfolioSectionComponent,
    FeaturedSectionComponent,
    TeamSectionComponent,
    CounterSectionComponent,
    ProjectSectionComponent,
    TestimonialSectionComponent,
    ClientSectionComponent,
    FooterSectionComponent,
    CopyrightSectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
