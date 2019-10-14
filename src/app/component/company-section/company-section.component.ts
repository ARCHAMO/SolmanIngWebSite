import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-section',
  templateUrl: './company-section.component.html',
  styleUrls: ['./company-section.component.css']
})
export class CompanySectionComponent implements OnInit {

  public company: Company;

  constructor() { }

  ngOnInit() {
    this.company = new Company();
    this.company.celular = '3017556619';
    this.company.direccion = '';
    this.company.email = '';
    this.company.logo = '';
    this.company.mision = '';
    this.company.nit = '';
    this.company.razonSocial = 'Solman Ingenieria S.A.S.';
    this.company.telefono = '3004311351';
    this.company.tituloBienvenida = 'Comenzemos tu proyecto juntos!';
    this.company.descripcionBienvenida = 'There are many variations of passages of Lorem Ipsum available, but the majority Have suffered alteration in some form, by injected humour, or randomised words Whicht look even slightly believable';
    this.company.vision = '';
  }

}
