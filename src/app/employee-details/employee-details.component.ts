import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit, OnChanges   {
@Input() empId: string;
emp: any;
empList: any;
  constructor(private http: HttpClient) { }
  ngOnChanges(changes: SimpleChanges) {
    let empIdChanges = changes['empId'];

    this.emp = this.empList.find((x: { id: string; }) => x.id === empIdChanges.currentValue);
  }

  ngOnInit() {
    this.http.get('assets/employeesData.json').subscribe(data => {this.empList = data});
  }

}
