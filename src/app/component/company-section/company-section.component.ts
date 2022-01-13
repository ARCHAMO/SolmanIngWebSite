import { Component, Input, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';

@Component({
  selector: 'app-company-section',
  templateUrl: './company-section.component.html',
  styleUrls: ['./company-section.component.css']
})
export class CompanySectionComponent implements OnInit {

  @Input() company = new Company();

  constructor() { }

  ngOnInit() {

  }

}
