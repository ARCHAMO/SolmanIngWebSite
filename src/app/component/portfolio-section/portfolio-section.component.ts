import { Component, OnInit } from '@angular/core';
import { ApiComsumerService } from 'src/app/services/api-comsumer.service';
import { TypeProject } from '../../models/typeproject';

@Component({
  selector: 'app-portfolio-section',
  templateUrl: './portfolio-section.component.html',
  styleUrls: ['./portfolio-section.component.css']
})
export class PortfolioSectionComponent implements OnInit {

  public arrayTypeProjects: TypeProject[] = [];

  constructor(
    private apiConsumer: ApiComsumerService
  ) { }

  ngOnInit() {
    this.apiConsumer.getMethod('typeprojects').subscribe(
      (response: any) => {
        this.arrayTypeProjects = response.docs;
      },
      error => {
        console.log(error);
      },
      () => {

      }
    )
  }

}
