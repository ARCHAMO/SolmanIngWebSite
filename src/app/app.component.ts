import { Component, OnInit } from '@angular/core';
import { Company } from 'src/app/models/company';
import { ApiComsumerService } from 'src/app/services/api-comsumer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'SolmanIngWebSite';

  public company: Company = new Company();

  constructor(
    private apiConsumer: ApiComsumerService
  ) {
  }

  ngOnInit(): void {
    this.apiConsumer.getMethod('company/5fcfb6d911b2f958cc8f7a0f').subscribe(
      (response: any) => {
        this.company = response.company;
      },
      error => {
        console.log(error);
      },
      () => {

      }
    );

  }
}
