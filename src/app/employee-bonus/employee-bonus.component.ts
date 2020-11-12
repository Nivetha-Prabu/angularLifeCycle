import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-bonus',
  templateUrl: './employee-bonus.component.html',
  styleUrls: ['./employee-bonus.component.css']
})
export class EmployeeBonusComponent implements OnInit {
empBonus: number;
empId: string;
calculateBonus(): number {
  if (this.empId === 'Emp01') {
     return 30000;
  } else {
  return 50000;
  }
}

  constructor() { }

  ngOnInit() {
  }

}
