import { Component, OnInit, Input } from '@angular/core';
import { CaseStatusApiService } from 'src/app/service/case-status-api.service';

@Component({
  selector: 'app-case-status',
  templateUrl: './case-status.component.html',
  styleUrls: ['./case-status.component.scss']
})
export class CaseStatusComponent implements OnInit {

  caseStatus: any;
  caseId: string;

  constructor(private caseStatusApi: CaseStatusApiService) { }

  ngOnInit(): void {
    // this.getCaseStatus(this.caseId);
  }

  getCaseStatus(caseNumber: string){
    this.caseStatusApi.getStatus(caseNumber).subscribe((data)=>{
      this.caseStatus = data;
      console.log("retrieving data")
      console.log(data)
    })
  }
}
